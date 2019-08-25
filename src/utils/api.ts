// Dependencies
import axios from 'axios'

const base = 'https://recognition.voicybot.com'

export async function recognize(
  engine: string,
  key: string | File,
  file: File,
  onUploadProgress: (progress: number) => void,
  language?: string
) {
  const formData = new FormData()
  formData.append('key', key)
  formData.append('file', file)
  if (language) {
    formData.append('language', language)
  }

  return axios.post(`${base}/recognize/${engine}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: progressEvent => {
      onUploadProgress(
        Math.round((progressEvent.loaded * 100) / progressEvent.total)
      )
    },
  })
}
