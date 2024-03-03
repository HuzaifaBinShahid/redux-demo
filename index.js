const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();



// Action

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "Buy a cake from the shop"
    }
}

function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: "Buy an Ice Cream from the Shop"
    }
}

// Reducer

const initialCakeState = {
    numofCakes: 10,

}

const initialIcecreamState = {
    numofIcecreams: 20
}

const CakeBuy = (state = initialCakeState, action) => {

    if (action.type === BUY_CAKE) {
        return {
            ...state,
            numofCakes: state.numofCakes - 1
        }
    }
    else {
        return state;
    }

}


const IceCreamBuy = (state = initialIcecreamState, action)=>{
    if (action.type === BUY_ICECREAM) {
        return {
            ...state,
            numofIcecreams: state.numofIcecreams - 1
        }
    }
    else {
        return state;
    }
}

// Combine Reducers

const rootReducer = combineReducers({
    cake: CakeBuy,
    icecream: IceCreamBuy
})


// Create Store

const store = createStore(rootReducer , applyMiddleware(logger));

console.log('initialState', store.getState());

store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());