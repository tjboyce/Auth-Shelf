

const itemList = (state = [], action) => {
    switch (action.type) {
        case 'GET_ITEM':
            return action.payload
        default:
            return state;
    }
};
export default itemList;