import { logo } from '@/static/images/logo64.json'

const formatter = new Intl.NumberFormat('tr-tr', {
  style: 'currency',
  currency: 'TRY',
})

export default function (
  { name, company },
  productBody = [],
  subtotal,
  { vat, subject },
  props,
  terms
) {
  return [
    {
      image: `data:image/jpeg;base64,${logo}`,
      width: 150,
    },
    {
      text: 'FİYAT TEKLİFİ',
      style: 'header',
      alignment: 'left',
    },
    {
      text: `FİRMA:   ${company.toUpperCase()}`,
      style: 'topleftinfo',
      alignment: 'left',
    },

    {
      text: `YETKİLİ:   ${name.toUpperCase()}`,
      style: 'topleftinfo',
      alignment: 'left',
    },
    {
      text: 'TEKLİFİN KONUSU',
      style: 'subject',
      alignment: 'left',
    },
    {
      text: `${subject.toUpperCase()}`,
      style: { fontSize: 9 },
      alignment: 'left',
    },
    {
      text: `TARİH: ${new Date().toLocaleDateString()}`,
      absolutePosition: { x: 440, y: 140 },
      style: {
        fontSize: 10,
      },
      bold: true,
    },

    {
      style: 'tableExample',
      table: {
        body: productBody,
      },
    },
    {
      style: 'bottomTable',
      layout: 'noBorders',
      table: {
        body: [
          [
            {
              style: 'tableInfo',
              text: 'ARA TOPLAM',
            },
            {
              style: 'tableInfo',
              text: `${formatter.format(subtotal)}`,
              alignment: 'center',
            },
          ],
          [
            { style: 'tableInfo', text: 'KDV' },
            {
              style: 'tableInfo',
              text: `${formatter.format((parseInt(subtotal) * vat) / 100)}`,
              alignment: 'center',
            },
          ],
          [
            { style: 'tableInfo', text: 'TOPLAM' },
            {
              style: 'tableInfo',
              text: `${formatter.format(
                (parseInt(subtotal) * vat) / 100 + parseInt(subtotal)
              )}`,
              alignment: 'center',
            },
          ],
        ],
      },
    },
    { text: '\n\nSİSTEMİN ÖZELLİKLERİ', style: { bold: true, fontSize: 10 } },
    {
      style: { fontSize: 9 },
      type: 'circle',
      ul: props,
    },
    { text: '\n\n\nÖDEME KOŞULLARI', style: { bold: true, fontSize: 10 } },
    {
      style: { fontSize: 9 },
      type: 'circle',
      ul: terms,
    },
  ]
}
