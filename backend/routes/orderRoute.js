const express=require("express");
const {protect}=require("../middleware/authmiddleware")
const {admin}=require("../middleware/adminmiddleware")
const {createOrder,getOrders,getOrderById,updateOrderStatus}=require("../controllers/")

const router=express.Router();

router.route('/').post(protect,createOrder).get(protect,admin,getOrders);
router.route('/:id').get(protect,getOrderById).put(protect,admin,updateOrderStatus);

module.exports=router;