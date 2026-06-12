/**
 * Vendored from bloomrpc-mock@0.3.4 (LGPL3), ported to @grpc/grpc-js.
 * Only the pieces BloomRPC uses are kept: proto loading, service walking
 * and request mock generation. The mock gRPC server was dropped.
 */
export * from './automock';
export * from './protobuf';
