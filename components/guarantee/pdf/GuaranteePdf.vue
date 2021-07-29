<template>
  <div class="is-flex is-justify-content-center" style="width: 100%">
    <b-button style="width: 100%" class="is-danger" @click="downloadPdf"
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
            text: 'AYHAN TİCARET ENDÜSTRİYEL TEMİZLİK MAKİNALARI',
            alignment: 'center',
            style: {
              fontSize: 9,
              bold: true,
            },
          },
          {
            text: 'Bahar Mahallesi Ulubatlı Hasan bulvarı No:69 Osmangazi / Bursa  TEL: 0 224 255 02 80 38 GSM: 0553 355 16 38  www.ayhanticaret.com',
            alignment: 'center',
            style: {
              fontSize: 8,
              bold: true,
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

      pdfMake
        .createPdf(docDefinition)
        .download(`${this.customer.name} - ${this.customer.company}`)
    },
  },
}
</script>
