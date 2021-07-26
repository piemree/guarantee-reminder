<template>
  <div class="container">
    <b-table :data="guarantees" ref="table">
      <b-table-column field="customer.company" label="Firma" v-slot="props">
        {{ props.row.customer.company }}
      </b-table-column>
      <b-table-column
        field="customer.name"
        label="Yetkili"
        sortable
        v-slot="props"
      >
        {{ props.row.customer.name }}
      </b-table-column>
      <b-table-column
        field="maintance.date"
        label="Bakım tarihi"
        @click="show(props.row)"
        sortable
        v-slot="props"
      >
        <span
          :class="
            props.row.maintance.checked ? 'tag is-success' : 'tag is-danger'
          "
        >
          {{ new Date(props.row.maintance.date).toLocaleDateString() }}
        </span>
      </b-table-column>
      <b-table-column
        field="guaranteeEndDate"
        label="Garanti bitiş"
        sortable
        v-slot="props"
      >
        <span
          :class="props.row.underGuarantee ? 'tag is-success' : 'tag is-danger'"
        >
          {{ new Date(props.row.guaranteeEndDate).toLocaleDateString() }}
        </span>
      </b-table-column>
      <b-table-column v-slot="props">
        <b-button @click="show(props.row)" style="width: 100%">Click</b-button>
      </b-table-column>
      <b-table-column v-slot="props">
        <b-button
          @click="deleteGuarantee(props.row._id)"
          class="is-danger"
          style="width: 100%"
          >Sil</b-button
        >
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ModalPage from '@/components/ModalPage.vue'

export default {
  async asyncData({ store }) {
    await store.dispatch('guarantee/getAllGuarantees')
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      guarantees: (state) => state.guarantee.guarantees,
    }),
  },

  methods: {
    show(data) {
      this.$buefy.modal.open({
        parent: this,
        props: { guarantee: data },
        component: ModalPage,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true,
      })
    },
    deleteGuarantee(id){
        this.$store.dispatch('guarantee/deleteGuarentee',{id})
    }
  },
}
</script>
