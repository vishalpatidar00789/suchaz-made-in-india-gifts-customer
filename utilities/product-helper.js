export function formatCurrency(num) {
    if (num !== undefined) {
        return parseFloat(num)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
    }
}

export function getColletionBySlug(collections, slug) {
    if (collections.length > 0) {
        const result = collections.find(item => item.slug === slug.toString());
        if (result !== undefined) {
            return result.products;
        } else {
            return [];
        }
    } else {
        return [];
    }
}

export function getProductData(collections) {
    if (collections.status == true) {
        const result = collections.data.docs;
        if (result !== undefined) {
            return result;
        } else {
            return [];
        }
    } else {
        return [];
    }
}
