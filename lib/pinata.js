const key = "a6ab678dc3d416f913e5"
const secret = "af63f4cd3a73988f6c01f5435c4420d2a606932912d8439d57754d79c611c445"

import axios from 'axios'

export const pinJSONToIPFS = async json => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`
  return axios
    .post(url, json, {
      headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return response.data.IpfsHash
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const pinFileToIPFS = async (file, pinataMetaData) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`

  let data = new FormData()

  data.append('file', file)
  data.append('pinataMetadata', JSON.stringify(pinataMetaData))

  return axios
    .post(url, data, {
      maxBodyLength: 'Infinity',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return response.data.IpfsHash
    })
    .catch(function (error) {
      console.log(error)
    })
}
