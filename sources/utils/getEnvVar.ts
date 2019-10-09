export function getEnvVarOrThrow(name: string): string {
  const envVar = process.env[name];
  if (!envVar) {
    throw new Error(`${name} missing in environment`);
  }
  return envVar;
}

export function getEnvVar(name: string): string | undefined {
  return process.env[name];
}
