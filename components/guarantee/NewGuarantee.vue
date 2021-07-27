<template>
  <div
    class="is-flex is-justify-content-center is-flex-direction-column"
    style="max-width: 720px; margin: auto"
  >
    <header>
      <h3 class="title is-4 my-3" style="text-align: center">Garanti</h3>
    </header>

    <!-- 
        customer inputs
       -->
    <header>
      <h3 class="title is-5 my-3 mt-5" style="text-align: start">Müsteri</h3>
    </header>
    <b-field label-position="on-border" label="Yetkili">
      <b-input v-model="customer.name"></b-input>
    </b-field>

    <b-field label-position="on-border" label="Firma">
      <b-input v-model="customer.company" type="text"></b-input>
    </b-field>

    <b-field label-position="on-border" label="Telefon">
      <b-input v-model="customer.phone" type="text"></b-input>
    </b-field>

    <b-field label-position="on-border" label="Adres">
      <b-input v-model="customer.address" type="text"></b-input>
    </b-field>
    <!-- 
        guarantee inputs
       -->

    <h3 class="title is-5 my-3 mt-5" style="text-align: start">Garanti</h3>

    <b-field label-position="on-border" label="Garanti konusu">
      <b-input v-model="guarantee.subject" type="text"></b-input>
    </b-field>
    <b-field label-position="on-border" label="Bakım periyodu(Ay)">
      <b-input v-model="guarantee.maintancePeriod" type="number"></b-input>
    </b-field>
    <b-field label-position="on-border" label="Garanti süresi(Ay)">
      <b-input v-model="guarantee.guaranteePeriod" type="number"></b-input>
    </b-field>

    <button
      :loading="load"
      type="submit"
      class="button is-primary"
      @click="createGuarantee"
    >
      Garanti olustur
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {
        name: '',
        company: '',
        phone: '',
        address: '',
      },
      guarantee: {
        subject: '',
        maintancePeriod: null,
        guaranteePeriod: null,
      },
      load: false,
    }
  },
  methods: {
    createGuarantee() {
      this.load = true
      this.$store
        .dispatch('guarantee/addNewGuarantee', {
          products: this.products,
          customer: this.customer,
          ...this.guarantee,
        })
        .then(() => this.$buefy.toast.open('Garanti oluşturuldu!'))
        .catch(() => this.$buefy.toast.open('İşlem başarısız!'))
      this.load = false
    },
  },
}
</script>
