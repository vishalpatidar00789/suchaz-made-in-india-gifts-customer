export const actionTypes = {
    ADD_ADDRESS: 'ADD_ADDRESS',
    GET_ADDRESS: 'GET_ADDRESS',
    UPDATE_ADDRESS_SUCCESS: 'UPDATE_ADDRESS_SUCCESS',
    GET_ADDRESS_ERROR: 'GET_ADDRESS_ERROR'
};

export function getAddress() {
    return { type: actionTypes.GET_ADDRESS };
}

export function addAddress(address) {
    return { type: actionTypes.ADD_ADDRESS, address };
}

export function updateAddress(address) {
    return { type: actionTypes.UPDATE_ADDRESS_SUCCESS, address };
}

export function getAddressError(error) {
    return {
        type: actionTypes.GET_ADDRESS_ERROR,
        error,
    };
}
