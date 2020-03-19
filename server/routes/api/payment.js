const express = require('express');
const router = express.Router();
const { initializePayment, confirmPayment } = require('../../services/paystack');

// endpoint to handle payment initialization
router.post('/init', async (req, res) => {
	// parse things you need to create the payment
	// this man include other customers data, like name, item name etc
	const { email, amount } = res.body;
	try {
		const paymentRes = await initializePayment({ email, amount });
		return res.status(201).json({ message: 'payment initialize', details: paymentRes });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ error: 'Payment initialization error' });
	}
});

// endpoint to confirm payment
router.get('/confirm', async (req, res) => {
	const { reference } = req.query;
	if (!reference) {
		return res.status(400).json({ error: 'Please include reference as query parameter' });
	}
	try {
		const paymentRes = await confirmPayment(reference);
		if (paymentRes) {
			return res.status(200).json({ message: 'Payment confirmations successful' });
		}
		return res.status(400).json({ message: 'Payment confirmation failed' });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Payment confirmation failed' });
	}
});

module.exports = router;
