module.exports = async function (next) {
  const guarantee = this

  //find guaranteeEndDate
  guarantee.guaranteeEndDate.setMonth(
    guarantee.guaranteeEndDate.getMonth() + guarantee.guaranteePeriod
  )

  //find maintances
  let maintanceDate = new Date(guarantee.createdAt)
  maintanceDate.setMonth(maintanceDate.getMonth() + guarantee.maintancePeriod)

  while (guarantee.guaranteeEndDate.getTime() >= maintanceDate.getTime()) {
    let date = new Date(maintanceDate.getTime())

    guarantee.maintances.push({ date })

    maintanceDate.setMonth(maintanceDate.getMonth() + guarantee.maintancePeriod)
  }

  //next Maintanence

  guarantee.maintance = guarantee.maintances.sort(
    (a, b) =>
      parseInt(new Date(a.date).getTime()) -
      parseInt(new Date(b.date).getTime())
  )[0]

  next()
}
