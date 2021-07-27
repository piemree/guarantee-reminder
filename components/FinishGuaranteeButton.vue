<template>
  <b-button
    :disabled="!underGuarantee"
    :loading="load"
    label="Garanti sonlandır"
    type="is-danger"
    @click="finishGuarantee"
  ></b-button>
</template>

<script>
export default {
  props: ['id', 'underGuarantee'],
  data() {
    return {
      load: false,
    }
  },
  methods: {
    finishGuarantee() {
      this.$buefy.dialog.confirm({
        title: 'Garanti iptali',
        message:
          'Garantiyi <b>İPTAL</b> etmek istediğinizden emin misiniz? Bu işlem geri alınamaz!',
        cancelText: 'Geri',
        confirmText: 'Devam',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.load = true
          this.$store
            .dispatch('guarantee/finishGuarantee', this.id)
            .then(() => {
              this.$buefy.toast.open('Garanti iptal edildi!')
              this.load = false
            })
            .catch(() => {
              this.$buefy.toast.open('İşlemi başarısız!')
              this.load = false
            })
        },
      })
    },
  },
}
</script>

<style></style>
