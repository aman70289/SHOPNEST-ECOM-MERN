const express=require("express");
const {protect}=require("../middleware/authmiddleware")
const {admin}=require("../middleware/adminmiddleware")
const {getProducts}=require("")
const multer=require('multer');
upload=multer({dest:'uploads/'});

const router=express.Router();
//all product
router.route('/').get(getProducts).post(protect,admin,upload.single('image'),createProduct);
//specific product
router.route('/:id').get(getProductById).put(protect,admin,updateProduct).delete(protect)


module.exports=router;