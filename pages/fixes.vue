<template>
  <div class="container" v-if="$store.state.fix.fixes.length > 0">
    <b-field label="Tamir Ara">
      <b-input v-model="name" icon="magnify" style="width: 20rem"></b-input>
    </b-field>
    <b-table :data="data" paginated :per-page="20">
      <b-table-column v-slot="props" label="Firma">
        {{ props.row.company }}
      </b-table-column>
      <b-table-column v-slot="props" label="Yetkili">
        {{ props.row.name }}
      </b-table-column>
      <b-table-column v-slot="props" label="Konu">
        {{ props.row.subject }}
      </b-table-column>
      <b-table-column
        field="price"
        sortable
        v-slot="props"
        label="Tamir ücreti"
      >
        {{ format(props.row.price) }}
      </b-table-column>
      <b-table-column
        field="createdAt"
        sortable
        v-slot="props"
        label="Tamir tarihi"
      >
        {{ new Date(props.row.createdAt).toLocaleDateString('tr') }}
      </b-table-column>
       <b-table-column v-slot="props">
        <delete-fix-button :id="props.row._id" />
      </b-table-column>
    </b-table>
  </div>
  <div
    class="
      has-text-weight-semibold
      is-flex
      is-flex-direction-column
      is-justify-content-center
      is-align-items-center
    "
    style="height: 100vh"
    v-else
  >
    <p class="is-size-6">TAMİR LİSTESİ BOS GÖRÜNÜYOR</p>
    <p class="is-size-6">TAMİR OLUSTURMAK İÇİN TIKLAYIN</p>
    <div class="is-flex is-justify-content-center my-5">
      <b-button type="is-success" @click="$router.push('/fix')"
        >Tamir olustur</b-button
      >
    </div>
  </div>
</template>

<script>
const formatter = new Intl.NumberFormat('tr-tr', {
  style: 'currency',
  currency: 'TRY',
})
export default {
  async asyncData({ store }) {
    await store.dispatch('fix/getAllFixes')
  },
  data() {
    return {
      name: '',
    }
  },
  computed: {
    data() {
      const fixes = this.$store.state.fix.fixes

      const regex = new RegExp(`^${this.name.toLowerCase()}`, 'g')

      return fixes.filter(
        ({ name, company }) =>
          name.toLowerCase().match(regex) || company.toLowerCase().match(regex)
      )
    },
  },
  methods: {
    format(price) {
      return formatter.format(price)
    },
  },
}
</script>

<style></style>
