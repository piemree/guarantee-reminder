export const state = () => ({
  guarantees: [],
})

export const mutations = {
  add(state, guarantee) {
    state.guarantees.push(guarantee)
  }
}

export const actions = {
    
}