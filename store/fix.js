export const state = () => ({
  fixes: [],
})

export const mutations = {
  setFixes(state, fixes) {
    state.fixes = [...fixes]
  },
  deleteFix(state, id) {
    const index = state.fixes.findIndex((g) => g._id === id)
    state.fixes.splice(index, 1)
  },
}

export const actions = {
  async addNewFix({ commit }, fix) {
    try {
      const result = await this.$axios.post('/fix/add', fix)
      return result
    } catch (error) {
      return error
    }
  },

  async getAllFixes({ commit }) {
    const result = await this.$axios.get('/fix')
    commit('setFixes', result.data.reverse())
    return result
  },

  async deleteFix({ commit }, { id }) {
    if (!id) return

    const result = await this.$axios.delete(`/fix/delete/${id}`)

    if (!result.data._id) return

    commit('deleteFix', result.data._id)

    return result
  },
}
