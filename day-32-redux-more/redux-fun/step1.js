const redux = require("redux");
const createStore = redux.createStore;
// actions
const ADD_HERO = "ADD_HERO";
 
// action creator
function addHero(){
    return {
        type : ADD_HERO,
        info : "my first action"
    }
}
 
// default value / intial value
const initalState = {
    numberOfHeroes : 0,
    message : ''
}
 
// reducers
const heroReducer = (state = initalState, action)=>{
    switch(action.type){
        case ADD_HERO : return { numberOfHeroes : state.numberOfHeroes + 1, message : action.info }
        default : return state
    }
}
 
// store
const store = createStore( heroReducer );
 
console.log( store.getState() );
 
store.subscribe( ()=> {
    console.log( store.getState() )
});

let ci = setInterval(() => {
    store.dispatch( addHero() );
    if(store.getState().numberOfHeroes > 10){
        clearInterval(ci);
    }
}, 1000);