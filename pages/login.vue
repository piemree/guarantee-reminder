<template>
  <section class="section">
    <form v-if="!$auth.loggedIn" @submit.prevent="login">
      
      <b-input v-model="username" placeholder="username" type="text" />
      <b-input v-model="password" placeholder="password" type="password" />
      <button>submit</button>
    </form>
    <h1 v-else><button @click="$auth.logout()">logout</button> WELCOME</h1>
  </section>
</template>

<script>
export default {

  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      try {
        const res = await this.$auth.loginWith('local', {
          data: { username: this.username, password: this.password },
        })
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
