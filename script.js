// Get Element 
const countEl = document.getElementById('count')
const incrementEl = document.getElementById('increment')
const decrementEl = document.getElementById('decrement')

// console.log(countEl, incrementEl, decrementEl)

// Identifier
const INCREMENT = 'increment'
const DECREMENT = 'decrement'


// action creator

const increment = (value)=>{
     return {
        type: INCREMENT,
        payload: value
    }
}

const decrement = (value)=>{
     return {
        type: DECREMENT,
        payload: value
    }
}
// Inital State


const initialState = {
    value:0
}

// Create Reducer
const counterReducer = (state = initialState, action)=>{
    if(action.type === INCREMENT){
        return {
            ...state,
            value: state.value+action.payload,
        }
    }
    else if(action.type === DECREMENT){
        return {
            ...state,
            value: state.value-action.payload,
        }
    } else{
        return state
    }
}

// Create Store
const store = Redux.createStore(counterReducer)

const render = ()=>{
    const state = store.getState()
    countEl.innerText = state.value.toString()
}

render()

store.subscribe(render)


// Event Listener
incrementEl.addEventListener('click', ()=>{
    store.dispatch(increment(3))
})

decrementEl.addEventListener('click', ()=>{
    store.dispatch(decrement(2))
})