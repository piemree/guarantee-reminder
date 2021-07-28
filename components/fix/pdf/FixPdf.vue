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
  props: ['fix'],
  methods: {
    downloadPdf() {
      const formatter = new Intl.NumberFormat('tr-tr', {
        style: 'currency',
        currency: 'TRY',
      })

      const fixBody = [
        [
          {
            style: 'tableHeader',
            text: 'YETKİLİ',
            alignment: 'center',
          },
          {
            style: 'tableHeader',
            text: 'FİRMA',
            alignment: 'center',
          },
          { style: 'tableHeader', text: 'TUTAR', alignment: 'center' },
        ],
        [
          {
            style: { fontSize: 9 },
            text: `${this.fix.name}`,
            alignment: 'left',
          },
          {
            style: { fontSize: 9 },
            text: `${this.fix.company}`,
            alignment: 'left',
          },
          {
            style: 'tableHeader',
            text: `${formatter.format(this.fix.price)}`,
            alignment: 'center',
          },
        ],
      ]

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
            text: 'Bahar Mahallesi Ulubatlı Hasan bulvarı No:69 Osmangazi / Bursa  T1: 0 224 255 02 80 38 T2: 0553 355 16 38  www.ayhanticaret.com',
            alignment: 'center',
            style: {
              fontSize: 8,
              bold: true,
            },
          },
        ],

        content: content(this.fix, fixBody),

        styles: { ...styles },
      }

      pdfMake
        .createPdf(docDefinition)
        .download(`${this.fix.name} - ${this.fix.company}`)
    },
  },
}
</script>
