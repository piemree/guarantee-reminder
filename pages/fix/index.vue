<template>
  <section class="section">
      <h1>fix</h1>
    <form @submit.prevent="login">
      <b-input v-model="username" placeholder="username" type="text" />
      <b-input v-model="password" placeholder="password" type="password" />
      <button>submit</button>
    </form>
    <b-button @click="test">test</b-button>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      const response = await this.$axios.post('/login', {
        username: this.username,
        password: this.password,
      })
      localStorage.setItem("token",response.data.token)
    },
    async test() {
      try {
        const res=  await this.$axios.post('/guarantee/add')
      console.log(res)
      } catch (error) {
        console.log(error.message)
      }
    }
  },
}
</script>
