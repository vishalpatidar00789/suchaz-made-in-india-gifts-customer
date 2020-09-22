import Repository, { baseUrl, serializeQuery } from './Repository';

class CollectionRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getCollections(payload) {
        let query = '';
        payload.forEach(item => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
        const reponse = await Repository.get(`${baseUrl}/collections?${query}`)
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async getCategoriesBySlug(payload) {
        // let query = '';
        // payload.forEach(item => {
        //     if (query === '') {
        //         query = `slug_in=${item}`;
        //     } else {
        //         query = query + `&slug_in=${item}`;
        //     }
        // });
        const reponse = await Repository.post(
            `${baseUrl}/getCategoryItems`,
            {
                search: "",
                action: "",
                page: 1,
                limit: 20
            }
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }

    async getProductsBySlug(slug) {
        const reponse = await Repository.get(
            `${baseUrl}/collections/slug?=${payload}`
        )
            .then(response => {
                return response.data;
            })
            .catch(error => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new CollectionRepository();