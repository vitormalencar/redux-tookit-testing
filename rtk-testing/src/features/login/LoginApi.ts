// A mock function to mimic making an async request for data
export function authRequest() {
  return new Promise<{ data: boolean }>((resolve) =>
    setTimeout(() => resolve({ data: true }), 2000)
  );
}
