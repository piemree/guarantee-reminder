

module.exports = async function (req, res, next) {
  const { products } = req.body;

 /*  const warranty = {
    vatPrice: 0,
    subtotal: 0,
    total: 0,
  };

  await Promise.all(
    products.map(async (el) => {
      const prod = await Product.find({ _id: el.product })
        .populate("product")
        .exec();

      warranty.subtotal = prod[0].price * 3;
      console.log("ic", warranty);
    })
  );
  console.log(warranty); */
  next();
};
