export const state = () => ({
  guarantees: [],
})

export const mutations = {}

export const actions = {
  async addNewGuarantee({ commit }, guarantee) {
    const result = await this.$axios.post('guarantee/add', guarantee)
    console.log(result)
    return result
  },
}
