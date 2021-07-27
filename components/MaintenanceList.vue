<template>
  <div>
    <div class="is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
      <div
        v-for="maintenance in sortedMaintenances"
        :key="maintenance._id"
        :class="
          maintenance.checked
            ? `has-background-success`
            : `has-background-danger`
        "
        style="
          border-radius: 5px;
          margin: 10px;
          padding: 3px;
          color: #fff;
          font-size: 14px;
        "
      >
        {{ new Date(maintenance.date).toLocaleDateString('tr') }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['maintenances'],

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
