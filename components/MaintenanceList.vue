<template>
  <div>
    <div class="is-flex is-justify-content-space-evenly">
      <div
        v-for="maintenance in sortedMaintenances"
        :key="maintenance._id"
        :class="
          maintenance.checked
            ? `has-background-success`
            : `has-background-danger`
        "
        style="
          height: 30px;
          border-radius: 5px;
          margin: 0 20px;
          padding: 3px;
          color: #fff;
        "
      >
        {{ new Date(maintenance.date).toLocaleDateString('tr') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { maintenances: { type: Array, required: true } },

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
    setMaintenance() {
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
