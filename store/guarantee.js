export const state = () => ({
  guarantees: [
    {
      _id: '123',
      underGuarantee: true,
      guaranteeEndDate: new Date('2021-11-23T00:25:57.492+00:00'),
      customer: {
        name: 'Emre Demir',
        company: 'AYHAN Ticaret',
        phone: '05476995487',
        address: 'çınarönü mahallesi ağrı caddesi no 12 kat2',
      },
      subject: '4 tamset self oto yıkama',
      maintances: [
        { checked: false, date: new Date('2021-09-23T00:27:19.738+00:00') },
      ],
      createdAt: new Date('2021-07-23T00:27:19.738+00:00'),
    },
  ],
})

export const mutations = {
  setGuarantees(state, guarantees) {
    state.guarantees = [...guarantees]
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
}
