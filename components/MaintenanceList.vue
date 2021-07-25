<template>
  <div>
    <div class="is-flex is-justify-content-space-evenly">
      <div
        v-for="sortedMaintenance in sortedMaintenances"
        :key="sortedMaintenance._id"
        :class="
          sortedMaintenance.checked
            ? `has-background-success`
            : `has-background-danger`
        "
        style="width: 30px; height: 30px; border-radius: 50%"
      ></div>
    </div>
    <b-button @click="set"> set status </b-button>
  </div>
</template>

<script>
export default {
  props: ['maintenances', 'id'],

  computed: {
    sortedMaintenances() {
      return [...this.maintenances].sort(
        (a, b) =>
          parseInt(new Date(a.date).getTime()) -
          parseInt(new Date(b.date).getTime())
      )
    },
  },
  methods: {
    set() {
      const filtered = this.sortedMaintenances.filter(
        (maintenance) => maintenance.checked === false
      )

      const toBeUpdate = filtered.sort(
        (a, b) =>
          parseInt(new Date(a.date).getTime()) -
          parseInt(new Date(b.date).getTime())
      )[0]

      if (!toBeUpdate) return

      this.$store.dispatch('guarantee/updateGuarentee', {
        id: this.id,
        maintenance: toBeUpdate,
      })
    },
  },
}
</script>
