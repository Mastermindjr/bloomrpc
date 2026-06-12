/**
 * electron-builder afterSign hook.
 *
 * Apple Silicon (arm64) refuses to launch binaries without any code
 * signature. When no signing identity is configured (e.g. local builds or
 * CI without Apple certificates), fall back to an ad-hoc signature so the
 * packaged app can still run on M1/M2/M3 Macs.
 */
const { execSync } = require('child_process');
const path = require('path');

exports.default = async function adhocSign(context) {
  if (context.electronPlatformName !== 'darwin') {
    return;
  }

  // A real identity was configured: electron-builder already signed the app.
  if (process.env.CSC_LINK || process.env.CSC_NAME) {
    return;
  }

  const appName = `${context.packager.appInfo.productFilename}.app`;
  const appPath = path.join(context.appOutDir, appName);

  console.log(`  • ad-hoc signing (no identity configured)  app=${appPath}`);
  execSync(`codesign --force --deep --sign - "${appPath}"`, { stdio: 'inherit' });
};
