<template>
  <div class="my-4">
    <div v-for="prop in properties" :key="prop.id">
      <div class="is-flex is-align-items-center my-2">
        <b-button
          class="mr-3 my-1 is-small is-danger"
          @click="$emit('idx', prop.id)"
          >X</b-button
        >
        <p>{{ prop.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { properties: { type: Array, default: () => [] } },
}
</script>
