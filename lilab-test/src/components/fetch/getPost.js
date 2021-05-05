const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '6092d8ca7ba1988a0114dab4';

export default async function getPost() {
  if (localStorage.getItem("posts")) {
    return JSON.parse(localStorage.getItem("posts"))
  }
  const response = await fetch(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
  const data = await response.json()
  localStorage.setItem("posts", JSON.stringify(data.data))
  return data.data
}