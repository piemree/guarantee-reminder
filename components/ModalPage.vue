<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ guarantee.customer.company }}</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <b-tabs position="is-centered" class="block">
          <b-tab-item label="Bakım">
            <MaintenanceList
              :maintenances="guarantee.maintances"
              :id="guarantee._id"
          /></b-tab-item>
          <b-tab-item label="Garanti"></b-tab-item>
          <b-tab-item label="Müşteri"></b-tab-item>
        </b-tabs>
      </section>
      <footer class="modal-card-foot">
        <b-button label="Garanti sonlandır" type="is-danger" />
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  props: ['guarantee'],
}
</script>

<style></style>
