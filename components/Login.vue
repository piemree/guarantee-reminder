<template>
  <section class="section is-flex is-justify-content-center">
    <section>
      <header>
        <h3 class="title mb-3" style="text-align: center">Giriş</h3>
      </header>
      <form class="box">
        <b-field
          label="Kullanıcı adı"
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
          <b-input v-model="password" password-reveal type="password"></b-input>
        </b-field>

        <b-button
          :loading="load"
          type="submit"
          class="button is-primary"
          @click="login"
        >
          Giriş yap
        </b-button>
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
      load: false,
    }
  },
  methods: {
    async login() {
      this.load = true
      try {
        const res = await this.$auth.loginWith('local', {
          data: { username: this.username, password: this.password },
        })
        this.usernameError = res.data.username
        this.passwordError = res.data.password
        if (this.usernameError || this.passwordError)
          this.$buefy.toast.open('Kullanıcı adı veya parola yanlış')
        else {
          this.$buefy.toast.open('Giriş başarılı')
        }
      } catch (error) {
        this.$buefy.toast.open('Giriş sırasında hata oluştu')
      }
      this.load = false
    },
  },
}
</script>
