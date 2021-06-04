export class TokenManager {
  saveToken(response) {
    localStorage.setItem('token', response.data.token)
  }

  get token() {
    return localStorage.getItem('token')
  }
}