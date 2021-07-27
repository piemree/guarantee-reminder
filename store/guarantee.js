export const state = () => ({
  guarantees: [],
})

export const mutations = {
  setGuarantees(state, guarantees) {
    state.guarantees = [...guarantees]
  },
  replaceMaintanence(state, guarantee) {
    const index = state.guarantees.findIndex((g) => g._id === guarantee._id)
    state.guarantees[index].maintance = guarantee.maintance
    state.guarantees[index].maintances = guarantee.maintances
  },
  replaceGuarantee(state, guarantee) {
    const index = state.guarantees.findIndex((g) => g._id === guarantee._id)
    state.guarantees[index].underGuarantee = guarantee.underGuarantee
  },
  deleteGuarentee(state, id) {
    const index = state.guarantees.findIndex((g) => g._id === id)
    state.guarantees.splice(index, 1)
  },
}

export const actions = {
  async addNewGuarantee({ commit }, guarantee) {
    try {
      const result = await this.$axios.post('/guarantee/add', guarantee)
      return result
    } catch (error) {
      return error
    }
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
    if (result.data == null) return

    commit('replaceMaintanence', result.data)
  },

  async finishGuarantee({ commit }, id) {
    const result = await this.$axios.put(`/guarantee/finishGuarantee/${id}`)
    commit('replaceGuarantee', result.data)
  },
  async deleteGuarentee({ commit }, { id }) {
    if (!id) return

    const result = await this.$axios.delete(`/guarantee/delete/${id}`)

    if (!result.data._id) return

    commit('deleteGuarentee', result.data._id)

    return result
  },
}
