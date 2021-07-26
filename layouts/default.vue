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
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Anasayfa
        </b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/guarantee' }"
          >Garanti
        </b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/bid' }"
          >Fiyat teklifi
        </b-navbar-item>
        <b-navbar-dropdown label="Tamir">
          <b-navbar-item tag="router-link" :to="{ path: '/bid' }"
            >Yeni tamir
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/bid' }"
            >Tamir listesi
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary" @click="$auth.logout()">
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
