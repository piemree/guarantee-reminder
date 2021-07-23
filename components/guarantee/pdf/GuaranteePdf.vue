<template>
  <div class="is-flex is-justify-content-center" style="width: 100%">
    <b-button style="width: 100%" @click="downloadPdf" class="is-danger"
      >PDF</b-button
    >
  </div>
</template>
<script>
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import styles from './style'
import content from './content'
pdfMake.vfs = pdfFonts.pdfMake.vfs
export default {
  props: ['guarantee', 'products', 'customer', 'properties', 'terms'],

  methods: {
    downloadPdf() {
      const formatter = new Intl.NumberFormat('tr-tr', {
        style: 'currency',
        currency: 'TRY',
      })
      const productBody = [
        [
          {
            style: 'tableNameHeader',
            text: 'ÜRÜN ADI',
            alignment: 'center',
          },
          {
            style: 'tableHeader',
            text: 'BİRİM FİYAT',
            alignment: 'center',
          },
          { style: 'tableHeader', text: 'PERON', alignment: 'center' },
          { style: 'tableHeader', text: 'TUTAR', alignment: 'center' },
        ],
      ]

      const propTexts = this.properties.map((e) => e.text)
      const termTexts = this.terms.map((e) => e.text)

      let subtotal = 0

      this.products.forEach((product) => {
        subtotal += parseInt(product.price * product.count)

        const element = [
          {
            style: 'itemName',
            text: `${product.name.toUpperCase()}`,
          },
          {
            style: 'item',
            text: `${formatter.format(product.price)}`,
            alignment: 'center',
          },
          {
            style: 'item',
            text: `${product.count}`,
            alignment: 'center',
          },
          {
            style: 'item',
            text: `${formatter.format(product.price * product.count)}`,
            alignment: 'center',
          },
        ]
        productBody.push(element)
      })

      const docDefinition = {
        footer: [
          {
            text: 'VATAN MAKİNA KİMYA SAN.TİC.LTD.ŞTİ',
            alignment: 'center',
            style: {
              fontSize: 9,
              bold:true
            },
          },
          {
            text: 'Demirci mahallesi demirciyolu caddesi no:28/a Nilüfer / BURSA T: 0 224 452 55 38 F: 0 224 452 73 88 vatanototemizlik.com',
            alignment: 'center',
            style: {
              fontSize: 8,
              bold:true
            },
          },
        ],

        content: content(
          this.customer,
          productBody,
          subtotal,
          this.guarantee,
          propTexts,
          termTexts
        ),

        styles: { ...styles },
      }

      pdfMake.createPdf(docDefinition).open()
    },
  },
}
</script>
