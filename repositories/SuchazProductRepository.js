import SuchazRepository, {
    suchazBaseUrl
} from './SuchazRepository';

class SuchazProductRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getRecords() {
        const reponse = await SuchazRepository.post(
            `${suchazBaseUrl}/searchitem`,
            {
                search: "",
                action: "dealoftheday",
                page: 1,
                limit: 20
            }
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsById(payload) {
        const reponse = await SuchazRepository.post(`${suchazBaseUrl}/itemDetails`,
        {
            id:payload
        })
            .then(response => {
                return response.data.data.docs[0];
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new SuchazProductRepository();
