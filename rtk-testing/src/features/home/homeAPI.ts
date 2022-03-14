export function fetchUsersRequest() {
  return fetch("https://randomuser.me/api/?results=5").then((response) =>
    response.json()
  );
}
