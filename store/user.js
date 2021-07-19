export const state = () => ({
 token:null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
}

export const actions = {
  async login({ commit }, loginInfo) {
    try {
      const response = await this.$axios.post('/login', loginInfo)
      const token = response.data.token
        console.log(token)
      commit('setToken', token)
      localStorage.setItem('token', token)

      this.$router.push('/home')
    } catch (error) {
     // console.log(error)
    }
  },
}
