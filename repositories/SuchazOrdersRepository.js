import SuchazRepository, { suchazBaseUrl } from './SuchazRepository';

class SuchazCollectionRepository {
    constructor(callback) {
        this.callback = callback;
    }
    async getOrderHistory(payload) {
        const reponse = await SuchazRepository.post(
            `${suchazBaseUrl}/order/orderHistory`,
            {
                search: '',
                action: 'new_arrivals',
                page: 1,
                limit: 20,
            },
            {
                headers: {
                    Authorization: 'Bearer ' + payload,
                }
            }
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new SuchazCollectionRepository();
