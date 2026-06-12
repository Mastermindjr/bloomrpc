<p align="center">
  <img src="./resources/logo.svg" width="256" height="256"/>
</p>
<h1 align="center">BloomRPC</h1>

<p align="center">
  <img src="https://img.shields.io/github/release/uw-labs/bloomrpc.svg" />
</p>
<p align="center">The missing GUI Client for gRPC services 🌸 </p>

<p align="center">Inspired by <b>Postman</b> and <b>GraphQL Playground</b><br/>
  <b>BloomRPC</b> aims to provide the simplest and most efficient developer experience for exploring
and querying your GRPC services.
</p>

## This project was archived in Jan 2023. Its usage is no longer recommended.


## Why was this project archived?

When BloomRPC was first released in Dec 2018, there were very few GUI gRPC tools available, hence the project tagline: "The missing GUI client for gRPC services". It was a good tool for a few years. Unfortunately, the project stalled in development and issues piled up, leaving users frustrated when things weren't working. We no longer felt that BloomRPC offered a good experience, so we decided to archive it.


## What should I use instead?

Check out the list of current gRPC tools at [awesome-grpc](https://github.com/grpc-ecosystem/awesome-grpc#tools).

## Apple Silicon (arm64) fork

This fork removes the native `grpc` C++ module (replaced by the pure-JS
`@grpc/grpc-js`, with the parts of `bloomrpc-mock` BloomRPC used vendored in
`app/vendor/bloomrpc-mock`) and upgrades Electron to 13.6.9 so the app can be
packaged natively for Apple Silicon — no Rosetta 2 required.

Build it on a Mac with:

```bash
yarn install --ignore-engines
yarn package-mac        # produces release/BloomRPC-*-arm64.dmg (and x64)
```

or trigger the `Build macOS (Apple Silicon + Intel)` GitHub Actions workflow,
which packages arm64 + x64 dmg/zip on a macOS runner and uploads them as
artifacts. CI builds are ad-hoc signed; after downloading, clear the
quarantine flag once: `xattr -dr com.apple.quarantine /Applications/BloomRPC.app`.

##

So long, and thanks for all the fish

<img src="./resources/editor-preview.gif" />
