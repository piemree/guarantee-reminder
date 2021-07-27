<template>
  <b-button
    :loading="load"
    class="is-danger is-small"
    style="width: 100%"
    @click="deleteFix"
    >Sil</b-button
  >
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      load: false,
    }
  },
  methods: {
    deleteFix() {
      this.$buefy.dialog.confirm({
        title: 'Tamir sil',
        message:
          'Tamiri <b>SİLMEK</b> istediğinizden emin misiniz? Bu işlem geri alınamaz!',
        cancelText: 'Geri',
        confirmText: 'Sil',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.load = true

          this.$store
            .dispatch('fix/deleteFix', {
              id: this.id,
            })
            .then(() => {
              this.$buefy.toast.open('Tamir silindi!')
              this.load = false
            })
            .catch(() => {
              this.$buefy.toast.open('Silme işlemi başarısız!')
              this.load = false
            })
        },
      })
    },
  },
}
</script>

<style></style>
