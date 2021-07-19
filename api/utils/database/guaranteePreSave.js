module.exports = async function (next) {
  const guarantee = this;

  //find guaranteeEndDate
  guarantee.guaranteeEndDate.setMonth(
    guarantee.guaranteeEndDate.getMonth() + guarantee.guaranteePeriod
  );

  //find maintances
  let maintanceDate = new Date(guarantee.createdAt);
  maintanceDate.setMonth(maintanceDate.getMonth() + guarantee.maintancePeriod);

  while (guarantee.guaranteeEndDate.getTime() >= maintanceDate.getTime()) {
    let date = new Date(maintanceDate.getTime());

    guarantee.maintances.push({ date });

    maintanceDate.setMonth(
      maintanceDate.getMonth() + guarantee.maintancePeriod
    );
  }
  // calculate amount
  guarantee.products.map(
    (product) => (product.amount = product.count * product.price)
  );
  guarantee.products.map((product) => (guarantee.subtotal += product.amount));

  guarantee.vatPrice = (guarantee.subtotal * guarantee.vat) / 100;

  guarantee.total = guarantee.vatPrice + guarantee.subtotal;

  next();
};
