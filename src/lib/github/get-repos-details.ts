import axios from "axios"

export const getRepoDetails = async () => {
  const owner = "Ahmedbenkhalifa"
  const repo = "my-potfolio"
  const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}`
  )

  return response.data
}
