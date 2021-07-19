const User = require("../models/user");

module.exports = async function (req, res, next) {
  const { username, password } = req.body;

  User.find({ username })
    .then((doc) => {
      if (!(doc.length > 0))
        return res.json({ message: "kullanıcı bulunamadı." });

      if (doc[0].password != password)
        return res.json({ message: "şifre yanlış" });

      req.user = { _id: doc[0]._id, username: doc[0].username };
      
      next();
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: err.message });
    });
};
