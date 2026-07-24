import { MongoClient, MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI;

// Default options: set reasonable timeouts and detect local URIs to avoid
// attempting TLS handshakes against non-TLS MongoDB servers (common cause
// of OpenSSL "wrong version number" errors).
const options: MongoClientOptions = {
  // Fail faster when the DB is unreachable during dev iterations
  serverSelectionTimeoutMS: 5000,
};

if (uri && (uri.includes("localhost") || uri.includes("127.0.0.1"))) {
  // Local MongoDB typically runs without TLS — ensure the driver doesn't try
  // to negotiate TLS which results in OpenSSL errors like "wrong version number".
  // Note: setting `tls`/`ssl` to false is safe for local development only.
  // For production/Atlas URIs (mongodb+srv) TLS is enabled by default.
  // We intentionally don't log the full URI (secrets), only the detection.
  // eslint-disable-next-line no-console
  console.info("[mongodb] Detected local MongoDB URI; disabling TLS for connection attempts.");
  (options as MongoClientOptions).tls = false;
}

if (!uri) {
  // We intentionally do NOT throw here. Routes that use this module fall
  // back to demo data when no connection is available, so a missing
  // MONGODB_URI should not crash the app at build/import time.
  console.warn(
    "[mongodb] MONGODB_URI is not set. API routes will serve fallback demo data."
  );
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!uri) {
  // No URI configured — export a rejected promise so callers can catch it
  // and fall back to demo data, without ever attempting a real connection.
  clientPromise = Promise.reject(
    new Error("MONGODB_URI is not defined in the environment")
  );
} else if (process.env.NODE_ENV === "development") {
  // In development, use a global variable so the value is preserved across
  // module reloads caused by HMR (Hot Module Replacement). Without this,
  // every reload would create a new MongoClient/connection.
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

/**
 * Shared, memoized MongoClient connection promise.
 * Import this in API routes / server components and await it once:
 *
 *   const client = await clientPromise;
 *   const db = client.db("portfolio");
 */
export default clientPromise;

export const DB_NAME = "portfolio";
export const PROJECTS_COLLECTION = "projects";