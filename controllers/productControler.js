const Product = require('../models/productModel.js');

//update product
exports.createProduct = async(req, res)=>{
 

   const product = await Product.create(req.body);
  
    res.status(200).json({
        success:true,
        message:"product create",
        product,
    })
}

//read product
exports.getAllProducts = async(req, res)=>{
  

  const product = await Product.find();
  const productCount = await Product.countDocuments();
  res.status(200).json({
    success:true,
    product,
    productCount,
    message:"all products mil gaye"
  })
}


//update product
exports.updateProduct = async(req, res)=>{
    let product = await Product.findById(req.params.id);
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true, 
      });

      res.status(200).json({
        success:true,
        message:"product Update",
        product
      })
}

//delete product
exports.deleteProduct = async(req, res)=>{
    const product = await Product.findById(req.params.id);
    await product.deleteOne();
    res.status(200).json({
        success:true,
        message:"product deleted",
    })
}