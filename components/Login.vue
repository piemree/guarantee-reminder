<template>
  <section class="section is-flex is-justify-content-center">
    <section>
      <header>
        <h3 class="title mb-3" style="text-align: center">Giriş</h3>
      </header>
      <form class="box" @submit.prevent="login">
        <b-field
          label="kullanıcı Adı"
          :type="{ 'is-danger': usernameError }"
          :message="{ 'Kullanıcı adı yanlıs': usernameError }"
        >
          <b-input v-model="username"></b-input>
        </b-field>

        <b-field
          label="Şifre"
          :type="{ 'is-danger': passwordError }"
          :message="{ 'Şifre yanlıs': passwordError }"
        >
          <b-input v-model="password" type="password"></b-input>
        </b-field>

        <button type="submit" class="button is-primary">Giriş yap</button>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      usernameError: false,
      passwordError: false,
    }
  },
  methods: {
    async login() {
      try {
        const res = await this.$auth.loginWith('local', {
          data: { username: this.username, password: this.password },
        })
        this.usernameError = res.data.username
        this.passwordError = res.data.password
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
