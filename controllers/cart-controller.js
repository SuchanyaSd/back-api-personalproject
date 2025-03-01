exports.addTocart = async (req, res, next) => {
   try {
      res.json({message : "addTocart"})
   } catch (err) {
      next(err)
   }
}
exports.updateTocart = async (req, res, next) => {
   try {
      res.json({message : "updateTocart"})
   } catch (err) {
      next(err)
   }
}
exports.getUserCart = async (req, res, next) => {
   try {
      res.json({message : "getUserCart"})
   } catch (err) {
      next(err)
   }
}