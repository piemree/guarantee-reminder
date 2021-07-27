<template>
  <div
    class="is-flex is-justify-content-center is-flex-direction-column"
    style="max-width: 720px; margin: auto"
  >
    <header>
      <h3 class="title is-4 my-3" style="text-align: center">Tamir oluştur</h3>
    </header>

    <!-- 
        fix inputs
       -->
    <header>
      <h3 class="title is-5 my-3 mt-5" style="text-align: start">
        Tamir bilgileri
      </h3>
    </header>
    <b-field label-position="on-border" label="Yetkili">
      <b-input v-model="fix.name"></b-input>
    </b-field>

    <b-field label-position="on-border" label="Firma">
      <b-input v-model="fix.company" type="text"></b-input>
    </b-field>

    <b-field label-position="on-border" label="Tamir konusu">
      <b-input v-model="fix.subject" type="text"></b-input>
    </b-field>

    <b-field label-position="on-border" label="Fiyat">
      <b-input v-model="fix.price" type="number"></b-input>
    </b-field>

    <b-button
      :loading="load"
      type="submit"
      class="button is-primary my-4"
      @click="createGuarantee"
    >
      Tamir oluştur
    </b-button>
    <FixPdf :fix="fix" />
  </div>
</template>

<script>
import FixPdf from '@/components/fix/pdf/FixPdf.vue'
export default {
  data() {
    return {
      components: { FixPdf },
      fix: {
        name: '',
        company: '',
        subject: '',
        price: '',
      },
      load: false,
    }
  },
  methods: {
    createGuarantee() {
      this.fix.price.toString()
      
      this.$buefy.dialog.confirm({
        title: 'Tamir oluştur',
        message: 'Tamir oluşturulacak onaylıyor musunuz?',
        cancelText: 'Geri',
        confirmText: 'Onayla',
        type: 'is-success',
        onConfirm: () => {
          this.load = true

          this.$store
            .dispatch('fix/addNewFix', this.fix)
            .then(() => {
              this.$buefy.toast.open('Tamir oluşturuldu!')
              this.$router.push('/fixes')
            })
            .catch(() => this.$buefy.toast.open('İşlem başarısız!'))
          this.load = false
        },
      })
    },
  },
}
</script>
