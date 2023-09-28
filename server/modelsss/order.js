const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    place: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
    guestno: { type: Number, required: true },
    price: { type: Number, required: true },
    bookin: { type: Date, required: true },
    name: { type: String, requires: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    total: { type: Number, required: true },
    payment_intent: { type: String, required: true },
    ordermethod: { type: String },
    orderstatus: { type: String },
    deliverystatus: { type: String },
    reason: { type: String, default: "Nil" },
})

const OrderModel = mongoose.model('Order', orderSchema);
module.exports = OrderModel;