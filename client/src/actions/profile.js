import axios from 'axios'

export const registration = async (params) => {
      try {
            const response = await axios.post('http://localhost:5000/api/auth/registration', params)
            alert(response.data.message)
      } catch (e) {
            console.log(`Client -> src -> actions -> profile: ${e}`)
      }
}