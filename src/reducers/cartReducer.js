import initialState from './initialState';

const findItem = (items, id) => {
    let itemFound = false;

    items.map((item, key) => {
        if(item.id === id)
            itemFound = key;
    });

    return itemFound;
}

export default function cart(state = initialState.cart, action) {
    switch (action.type) {
        case 'CLEAR_CART':
            return [];

        case 'INCREASE_QUANTITY':
            var itemFound = findItem(state, action.item.id);
            
            if(itemFound !== false) {
                state[itemFound].quantity++;
                state[itemFound].total = state[itemFound].quantity * state[itemFound].price;
                return [...state];
            }

            return state;

        case 'DECREASE_QUANTITY':

            var itemFound = findItem(state, action.item.id);
            
            if(itemFound !== false) {
                state[itemFound].quantity--;
                if(state[itemFound].quantity > 0)
                    state[itemFound].total = state[itemFound].quantity * state[itemFound].price;
                else
                    state.splice(itemFound, 1);
                return [...state];
            }

            return state;

        case 'ADD_TO_CART':
            var itemFound = findItem(state, action.item.id);

            if(itemFound !== false) {
                state[itemFound].quantity++;
                state[itemFound].total = state[itemFound].quantity * state[itemFound].price;
                return [...state];
            } else{
                action.item.quantity = 1;
                action.item.total = action.item.price;
                return [...state, action.item];
            }

        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.item.id);
            
        default:
            return state;
    }
};