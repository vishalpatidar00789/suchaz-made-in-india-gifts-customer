import SuchazRepository, { suchazBaseUrl } from './SuchazRepository';
import axios from 'axios';

import SuchazOrderRepository from './SuchazOrderRepository';

class SuchazProductRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getRecords() {
        const reponse = await SuchazRepository.post(
            `${suchazBaseUrl}/searchitem`,
            {
                search: '',
                action: 'dealoftheday',
                page: 1,
                limit: 15,
            }
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getFilterCategories(params) {
        const reponse = await SuchazRepository.post(
            `${suchazBaseUrl}/filterCategory`,
            params
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsById(payload) {
        const reponse = await SuchazRepository.post(
            `${suchazBaseUrl}/itemDetails`,
            {
                id: payload,
            }
        )
            .then((response) => {
                return response.data.data.docs[0];
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async placeOrder(payload) {
        const { cart, shippingAddress } = payload;

        let products = cart.cartItems.map((item) => {
            let totalItemshippingCharge = parseFloat(item.shippingCharge) * parseFloat(item.quantity);
            let totalItemAmount = parseFloat(item.bestPrice) * parseFloat(item.quantity);
            let gst =  (parseFloat(totalItemAmount) -  parseFloat(totalItemAmount) / parseFloat('1.'+ item.gst));
            return {
                productId: item.id,
                quantity: item.quantity,
                vendorId: item.vendorId,
                lineGiftWrapChargesTotal: '0',
                lineTotal: item.bestPrice,
                giftWrapCharges: item.giftWrapCharges,
                giftWrapSelected: item.giftWrapSelected,
                gst: gst.toFixed(2),
                shippingCharges: totalItemshippingCharge.toFixed(2)
            };
        });

        let shipAdd = {
            recipientFistName: shippingAddress.firstName,
            recipientLastName: shippingAddress.lastName,
            addressLine1: shippingAddress.apartment,
            addressLine2: shippingAddress.address,
            city: shippingAddress.city,
            state: shippingAddress.state,
            pinCode: shippingAddress.postalCode,
        };

        const formData = new FormData();
        formData.append('userEmail', shippingAddress.email);
        formData.append('contact_no', shippingAddress.contact_no);
        formData.append('lineItems[]', JSON.stringify(products));
        formData.append('shippingAddress', JSON.stringify(shipAdd));
        formData.append('giftWrapChargesTotal', '0');
        formData.append('subTotal', cart.amount);
        formData.append('shippingCharges', cart.shippingCharges);
        formData.append('giftWrapCharges', cart.giftWrapCharges);
        formData.append('GST', cart.gst);
        formData.append('status', '1');
        formData.append('paymentMethod', 'cod');
        formData.append('createdBy', '5f04c9ebe076ff31968e7b01');
        formData.append('lastUpdatedBy', '5f04c9ebe076ff31968e7b01');

        const reponse = await axios
            .post('https://www.suchaz.com/apiv2/order/placeorder', formData)
            .then((res) => {
                return res.data.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;

        // const reponse = await SuchazOrderRepository.post(`${suchazBaseUrl}/order/placeorder`,
        // {
        //     formData
        // })
        //     .then(response => {
        //         return response.data.data;
        //     })
        //     .catch(error => ({ error: JSON.stringify(error) }));
        // return reponse;
    }
}

export default new SuchazProductRepository();
