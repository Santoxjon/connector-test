export interface SpaceXApi {
  openapi: string;
  info: Info;
  servers: Server[];
  externalDocs: ExternalDocs;
  security: Security[];
  paths: Paths;
}

interface Info {
  title: string;
  version: string;
}

interface Server {
  url: string;
}

interface ExternalDocs {
  description: string;
  url: string;
}

interface Security {
  apiKey: any[];
}

interface Paths {
  [path: string]: PathItem;
}

interface PathItem {
  get: Operation;
}

interface Operation {
  operationId: string;
  parameters: Parameter[];
  responses: Responses;
}

interface Parameter {
  in: string;
  name: string;
  required: boolean;
}

interface Responses {
  [statusCode: string]: Response;
}

interface Response {
  description: string;
  content: Record<string, unknown>;
}
