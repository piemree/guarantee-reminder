<template>
  <form action="">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ guarantee.customer.company }}</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <h3 class="is-size-5 has-text-centered has-text-weight-bold my-1">
          BAKIM TARİHLERİ
        </h3>
        <maintenance-list
          :id="guarantee._id"
          :maintenances="guarantee.maintances"
        />
        <section>
          <h3 class="is-size-5 has-text-left has-text-weight-bold mt-3">
            FİRMA BİLGİLERİ
          </h3>
          <ul class="my-1">
            <li class="has-text-weight-bold">
              <p>Konu: {{ guarantee.subject }}</p>
            </li>
            <li class="has-text-weight-bold">
              <p>Yetkili: {{ guarantee.customer.name }}</p>
            </li>
            <li class="has-text-weight-bold">
              <p>Telefon: {{ guarantee.customer.phone }}</p>
            </li>
            <li class="has-text-weight-bold">
              <p>Adres: {{ guarantee.customer.address }}</p>
            </li>
            <li class="has-text-weight-bold">
              <p>
                Garanti altında:
                {{ guarantee.underGuarantee ? `EVET` : `HAYIR` }}
              </p>
            </li>
          </ul>
        </section>
      </section>
      <footer class="modal-card-foot is-flex is-justify-content-space-evenly">
        <set-maintenance-button :guarantee="guarantee" />
        <finish-guarantee-button
          :id="guarantee._id"
          :under-guarantee="guarantee.underGuarantee"
        />
      </footer>
    </div>
  </form>
</template>

<script>
export default {
   props: ["guarantee"],
}
</script>