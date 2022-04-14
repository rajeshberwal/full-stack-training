const redux = require("redux");
const createStore = redux.createStore;
// actions
const ADD_HERO = "ADD_HERO";
const REMOVE_HERO = "REMOVE_HERO";
 
// action creator
function addHero(){
    return {
        type : ADD_HERO
    }
}
function removeHero(){
    return {
        type : REMOVE_HERO
    }
}
 
// default value / intial value
const initalState = {
    numberOfHeroes : 0
}
 
// reducers
const heroReducer = (state = initalState, action)=>{
    switch(action.type){
        case ADD_HERO : return { numberOfHeroes : state.numberOfHeroes + 1 }
        case REMOVE_HERO : return { numberOfHeroes : state.numberOfHeroes - 1 }
        default : return state
    }
}
 
// store
const store = createStore( heroReducer );
 
console.log( store.getState() );
 
store.subscribe( ()=> {
    console.log( store.getState() )
})
 
store.dispatch( addHero() );
store.dispatch( addHero() );
store.dispatch( addHero() );
store.dispatch( addHero() );
store.dispatch( removeHero() );
store.dispatch( removeHero() );
store.dispatch( removeHero() );
store.dispatch( addHero() );
store.dispatch( addHero() );