<template>
  <div
    class="is-flex is-justify-content-center is-flex-direction-column"
    style="max-width: 720px; margin: auto"
  >
    <header>
      <h3 class="title is-4 my-3" style="text-align: center">Fiyat Teklifi</h3>
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

    <b-field label-position="on-border" label="Teklif konusu">
      <b-input v-model="guarantee.subject" type="text"></b-input>
    </b-field>
    <b-field label-position="on-border" label="Kdv">
      <b-input v-model="guarantee.vat" type="text"></b-input>
    </b-field>
    <b-field label-position="on-border" label="Bakım periyodu(Ay)">
      <b-input v-model="guarantee.maintancePeriod" type="number"></b-input>
    </b-field>
    <b-field label-position="on-border" label="Garanti süresi(Ay)">
      <b-input v-model="guarantee.guaranteePeriod" type="number"></b-input>
    </b-field>
    <!-- 
        product inputs
       -->

    <h3 class="title is-5 my-3 mt-5" style="text-align: start">Ürün</h3>

    <b-field label-position="on-border" label="Ad">
      <b-input v-model="product.name" type="text"></b-input>
    </b-field>
    <b-field label-position="on-border" label="Fiyat">
      <b-input v-model="product.price" type="number"></b-input>
    </b-field>
    <b-field label-position="on-border" label="Adet">
      <b-input v-model="product.count" type="number"></b-input>
    </b-field>
    <div>
      <b-button
        class="button is-primary is-fullwidth"
        style="text-align: end"
        @click="addProduct"
        >Ekle</b-button
      >
      <ProductsTable
        v-if="products.length > 0"
        :products="products"
        @idx="deleteProduct"
      />
    </div>
    <h3 class="title is-5 my-3 mt-5" style="text-align: start">Sistem özellikleri</h3>
    <b-field label="Özellik" label-position="on-border">
      <b-input v-model="prop.text" maxlength="200" type="textarea"></b-input>
    </b-field>
    <div>
      <b-button
        class="button is-primary is-fullwidth"
        style="text-align: end"
        @click="addProp"
        >Ekle</b-button
      >
      <PropertiesTable
        v-if="properties.length > 0"
        :properties="properties"
        @idx="deleteProp"
      />
    </div>

    <button @click="createGuarantee" type="submit" class="button is-primary">
      Garanti olustur
    </button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import PropertiesTable from '~/components/PropertiesTable.vue'
import ProductsTable from '~/components/ProductsTable.vue'
export default {
  components: {
    PropertiesTable,
    ProductsTable,
  },
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
        vat: 18,
        maintancePeriod: null,
        guaranteePeriod: null,
      },

      product: {
        name: '',
        price: null,
        count: null,
      },
      properties: [],
      products: [],
      prop: { text: '' },
    }
  },
  methods: {
    async createGuarantee() {
    await this.$store.dispatch('guarantee/addNewGuarantee', {
        products: this.products,
        customer: this.customer,
        ...this.guarantee,
      })
    },
    addProp() {
      if (this.prop.text === '') return
      this.properties.push({ ...this.prop, id: uuidv4() })
      this.prop.text = ''
    },
    deleteProp(id) {
      const idx = this.properties.findIndex((el) => el.id === id)
      this.properties.splice(idx, 1)
    },
    addProduct() {
      const { name, price, count } = this.product
      if (!(name && price && count)) return
      this.products.push({ ...this.product, id: uuidv4() })
      this.product.name = ''
      this.product.price = null
      this.product.count = null
    },
    deleteProduct(id) {
      const idx = this.products.findIndex((el) => el.id === id)
      this.products.splice(idx, 1)
    },
  },
}
</script>
