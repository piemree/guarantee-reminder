import { logo } from '@/static/images/logo64.json'

export default function ({subject}, fixBody = []) {
  return [
    {
      image: `data:image/jpeg;base64,${logo}`,
      width: 150,
    },
    {
      text: 'TAMİR BİLGİLENDİRME FORMU',
      style: 'header',
      alignment: 'left',
    },

    {
      text: 'TAMİRİN KONUSU',
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
        body: fixBody,
      },
    },
  ]
}
