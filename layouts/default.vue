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
