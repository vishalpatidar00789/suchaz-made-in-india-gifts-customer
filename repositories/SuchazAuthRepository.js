import SuchazRepository, { suchazBaseUrl } from './SuchazRepository';

class SuchazAuthRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async registerRequest(payload) {
        const reponse = await SuchazRepository.post(
            `${suchazBaseUrl}/auth/register`,
            payload
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async registerVendorRequest(payload) {
        const reponse = await SuchazRepository.post(
            `${suchazBaseUrl}/admin/vendor/vendorRequest`,
            payload
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                if (error.response) {
                    return error.response.data;
                }
                console.log(error);
            });
        return reponse;
    }

    async loginRequest(payload) {
        const reponse = await SuchazRepository.post(
            `${suchazBaseUrl}/auth/login`,
            payload
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new SuchazAuthRepository();
