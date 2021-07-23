<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <h2>
            <b>AYHAN TİC.</b>
          </h2>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item href="/"> Anasayfa </b-navbar-item>
        <b-navbar-dropdown label="Garanti">
          <b-navbar-item href="new">Yeni </b-navbar-item>
          <b-navbar-item href="/"> Liste </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-dropdown label="Tamir">
          <b-navbar-item href="/fixes"> Yeni </b-navbar-item>
          <b-navbar-item href="/fixes/new"> Liste </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary" @click="$auth.logout()" >
              <strong>Çıkış</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="container column is-10 px-6">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
}
</script>
