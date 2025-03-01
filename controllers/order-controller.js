exports.placeOrder = async (req, res, next) => {
   try {
      res.json({message : "placeOrder"})
   } catch (err) {
      next(err)
   }
}

exports.allOrders = async (req, res, next) => {
   try {
      res.json({message : "allOrder"})
   } catch (err) {
      next(err)
   }
}

exports.userOrders = async (req, res, next) => {
   try {
      res.json({message : "userOrder"})
   } catch (err) {
      next(err)
   }
}

exports.updateStatus = async (req, res, next) => {
   try {
      res.json({message : "updateStatus"})
   } catch (err) {
      next(err)
   }
}