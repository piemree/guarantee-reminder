export const state = () => ({
  guarantees: [],
})

export const mutations = {
  setGuarantees(state, guarantees) {
    state.guarantees = [...guarantees]
  },
  replaceGuarantees(state, guarantee) {
    const index = state.guarantees.findIndex((g) => g._id === guarantee._id)
    state.guarantees[index].maintances = guarantee.maintances
  },
}

export const actions = {
  async addNewGuarantee({ commit }, guarantee) {
    const result = await this.$axios.post('/guarantee/add', guarantee)
    console.log(result)
    return result
  },

  async getAllGuarantees({ commit }) {
    const result = await this.$axios.get('/guarantee')
    commit('setGuarantees', result.data)
    return result
  },

  async updateGuarentee({ commit }, { id, maintenance }) {
    if (!maintenance._id) return

    const result = await this.$axios.put(`/guarantee/updateMaintanence/${id}`, {
      id: maintenance._id,
    })
    console.log(result.data)
    if (result.data == null) return
    console.log(result.data)
    commit('replaceGuarantees', result.data)
  },
}
