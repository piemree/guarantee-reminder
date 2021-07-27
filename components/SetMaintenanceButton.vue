<template>
  <b-button
    :loading="load"
    :disabled="!guarantee.underGuarantee"
    label="Bakım"
    type="is-success"
    @click="setMaintenance"
  ></b-button>
</template>

<script>
export default {
  props: { guarantee: { type: Object, required: true } },
  data() {
    return {
      load: false,
    }
  },
  methods: {
    setMaintenance() {
      const filtered = [...this.guarantee.maintances].filter(
        (maintenance) => maintenance.checked === false
      )

      const toBeUpdate = filtered.sort(
        (a, b) =>
          parseInt(new Date(a.date).getTime()) -
          parseInt(new Date(b.date).getTime())
      )[0]

      if (!toBeUpdate) return this.$buefy.toast.open('Tüm bakımlar yapılmış!')

      this.$buefy.dialog.confirm({
        title: 'Bakım yap',
        message: `${new Date(toBeUpdate.date).toLocaleDateString(
          'tr'
        )} tarihli bakım yapıldı olarak işaretlenecek. Onaylıyor musunuz? Bu işlem geri alınamaz!`,
        cancelText: 'Geri',
        confirmText: 'Devam',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.load = true
          this.$store
            .dispatch('guarantee/updateGuarentee', {
              id: this.guarantee._id,
              maintenance: toBeUpdate,
            })
            .then(() => this.$buefy.toast.open('Bakım yapıldı!'))
            .catch(() => this.$buefy.toast.open('Bakım esnasında hata olustu!'))
          this.load = false
        },
      })
    },
  },
}
</script>
