import axios from "axios";

export async function searchUsers(firstUser, secondUser) {
  const requestApi = await axios.get(
    `https://api.github.com/users/tutuezin/repos`
  );
  console.log(requestApi.data);

  return requestApi;
}
