<template>
  <div class="container">
    <b-table
      :data="guarantees"
      :selected.sync="selected"
      @click="show"
      ref="table"
    >
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
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      selected: null,
    }
  },
  computed: {
    ...mapState({
      guarantees: (state) => state.guarantee.guarantees,
    }),
  },
  async fetch() {
    await this.$store.dispatch('guarantee/getAllGuarantees')
  },

  methods: {
    show() {
      console.log(this.selected)
    },
  },
}
</script>
