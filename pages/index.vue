<template>
  <div class="container" v-if="$store.state.guarantee.guarantees.length > 0">
    <b-field label="Garanti Ara">
      <b-input v-model="name" icon="magnify" style="width: 20rem"></b-input>
    </b-field>
    <b-table :data="data" paginated :per-page="20">
      <b-table-column v-slot="props" label="Firma">
        {{ props.row.customer.company }}
      </b-table-column>
      <b-table-column v-slot="props" label="Yetkili">
        {{ props.row.customer.name }}
      </b-table-column>
      <b-table-column v-slot="props" label="Konu">
        {{ props.row.subject }}
      </b-table-column>
      <b-table-column
        v-slot="props"
        field="maintance.date"
        label="Bakım tarihi"
        sortable
      >
        <span
          :class="
            props.row.maintance.checked ? 'tag is-success' : 'tag is-danger'
          "
        >
          {{ new Date(props.row.maintance.date).toLocaleDateString('tr') }}
        </span>
      </b-table-column>
      <b-table-column
        v-slot="props"
        field="guaranteeEndDate"
        label="Garanti bitiş"
        sortable
      >
        <span
          :class="props.row.underGuarantee ? 'tag is-success' : 'tag is-danger'"
        >
          {{ new Date(props.row.guaranteeEndDate).toLocaleDateString('tr') }}
        </span>
      </b-table-column>
      <b-table-column v-slot="props">
        <b-button
          class="is-small"
          style="width: 100%"
          @click="details(props.row)"
          >Garanti detayları</b-button
        >
      </b-table-column>
      <b-table-column v-slot="props">
        <delete-button :id="props.row._id" />
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
    <p class="is-size-6">GARANTİ LİSTESİ BOS GÖRÜNÜYOR</p>
    <p class="is-size-6">GARANTİ OLUSTURMAK İÇİN TIKLAYIN</p>
    <div class="is-flex is-justify-content-center my-5">
      <b-button type="is-success" @click="$router.push('/guarantee')"
        >Garanti olustur</b-button
      >
    </div>
  </div>
</template>

<script>
import ModalPage from '@/components/ModalPage.vue'

export default {
  async asyncData({ store }) {
    await store.dispatch('guarantee/getAllGuarantees')
  },
  data() {
    return {
      name: '',
    }
  },
  computed: {
    data() {
      const guarantees = this.$store.state.guarantee.guarantees

      const regex = new RegExp(`^${this.name.toLowerCase()}`, 'g')

      return guarantees.filter(
        ({ customer }) =>
          customer.name.toLowerCase().match(regex) ||
          customer.company.toLowerCase().match(regex)
      )
    },
  },
  methods: {
    details(data) {
      this.$buefy.modal.open({
        parent: this,
        props: { guarantee: data },
        component: ModalPage,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true,
      })
    },
  },
}
</script>
