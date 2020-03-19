const { config } = require('dotenv');
const axios = require('axios');
config();

const PAYSTACK_KEY = process.env.PAYSTACK_KEY;
const reqConfig = {
	headers: {
		authorization: `Bearer ${PAYSTACK_KEY}`
	}
};

const initializePayment = async (userDetails) => {
	// Note amount must be in kobo *100;
	const url = 'https://api.paystack.co/transaction/initialize';
	try {
		const { data: { data } } = await axios.post(url, userDetails, reqConfig);
		return data;
	} catch (error) {
		throw new Error(error);
	}
};

const confirmPayment = async (reference) => {
	const url = `https://api.paystack.co/transaction/verify/${reference}`;
	try {
		const { data: { data } } = await axios.get(url, reqConfig);
		return data;
	} catch (error) {
		throw new Error(error);
	}
};

module.exports = {
	initializePayment,
	confirmPayment
};
