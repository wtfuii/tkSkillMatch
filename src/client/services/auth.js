import Vue from 'vue'

export const bus = new Vue()

export const authService = function() {
  return {
    getUser: () => {
      const user = localStorage.getItem('user')
      return user ? JSON.parse(user) : null
    },
    logout: () => {
      localStorage.setItem('user', null)
      return null
    },
    login: (data) => {
      localStorage.setItem('user', JSON.stringify(data))
      return data
    }
  }
}
