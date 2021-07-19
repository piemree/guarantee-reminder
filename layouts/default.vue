<template>
  <div>
    <NuxtLink to="/home">home</NuxtLink>
    <NuxtLink to="/">main</NuxtLink>
    <NuxtLink to="/about">about</NuxtLink>
    <button @click="$auth.logout()">logout</button>
    <div class="container column is-10">

      <Nuxt />
    
    </div>
  </div>
</template>

<script>
export default {}
</script>
