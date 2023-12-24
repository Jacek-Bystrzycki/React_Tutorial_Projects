const reducer = (state, action) => {
    if (action.type === "SET-LOADING") {
        return {
            ...state, loading: true
        };
    };

    if (action.type === "DATA-FETCH") {
        const newAmount = action.payload.length;
        const newTotal = action.payload.reduce((total, current) => {
            return total += JSON.parse(current.price);
        },0);
        return {
            cart: action.payload,
            loading: false,
            amount: newAmount,
            total: newTotal
        };
    };

    if (action.type === "INCREASE") {
        const id = action.payload;
        const newCart = state.cart.map(item => {
            if (item.id === id) {
                item = {...item, amount: item.amount + 1}
            };
            return item;
        });
        const newAmount = newCart.reduce((total, current) => {
            return total += current.amount;
        },0);
        const newTotal = newCart.reduce((total, current) => {
            return total += JSON.parse(current.price) * current.amount;
        },0);
        return {
            ...state,
            cart: newCart,
            amount: newAmount,
            total: newTotal
        };
    };

    if (action.type === "DECREASE") {
        const id = action.payload;
        const newCart = state.cart.map(item => {
            if (item.id === id && item.amount > 1) {
                item = {...item, amount: item.amount - 1}      
            };
            return item;
        });
        const newAmount = newCart.reduce((total, current) => {
            return total += current.amount;
        },0);
        const newTotal = newCart.reduce((total, current) => {
            return total += JSON.parse(current.price) * current.amount;
        },0);
        return {
            ...state,
            cart: newCart,
            amount: newAmount,
            total: newTotal
        };
    };

    if (action.type === "REMOVE") {
        const id = action.payload;
        const newCart = state.cart.filter(item => item.id !== id);
        const newTotal = newCart.reduce((total, current) => {
            return total += JSON.parse(current.price) * current.amount;
        },0);
        const newAmount = newCart.reduce((total, current) => {
            return total += current.amount;
        },0);
        return {
            ...state,
            cart: newCart,
            amount: newAmount,
            total: newTotal
        };
    };

    if (action.type === "CLEAR") {
        return {
            ...state,
            cart: [],
            amount: 0,
            total: 0
        };
    };

    throw new Error("No action found for the reducer!");
};

export default reducer;