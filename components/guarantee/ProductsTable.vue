<template>
  <div class="my-4">
    <b-table :data="products" :mobile-cards="false">
      <b-table-column v-slot="props" field="product.name" label="Ürün">
        {{ props.row.name }}
      </b-table-column>
      <b-table-column v-slot="props" field="price" label="Fiyat">
        {{ format(props.row.price) }}
      </b-table-column>
      <b-table-column v-slot="props" field="count" label="Adet">
        {{ props.row.count }}
      </b-table-column>
      <b-table-column v-slot="props">
        <b-button
          style="height: 1.5rem"
          class="m-0 p-2 is-small is-danger"
          @click="$emit('idx', props.row.id)"
        >
          X
        </b-button>
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
const formatter = new Intl.NumberFormat('tr-tr', {
  style: 'currency',
  currency: 'TRY',
})
export default {
  props: ['products'],
  methods: {
    format(price) {
      return formatter.format(price)
    },
  },
}
</script>

<style></style>
