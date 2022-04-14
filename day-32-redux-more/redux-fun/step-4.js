const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
// actions
const ADD_HERO = "ADD_HERO";
const REMOVE_HERO = "REMOVE_HERO";
const ADD_MOVIE = "ADD_MOVIE";
const REMOVE_MOVIE = "REMOVE_MOVIE";
 
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
function addMovie(){
    return {
        type : ADD_MOVIE
    }
}
function removeMovie(){
    return {
        type : REMOVE_MOVIE
    }
}
 
// default value / intial value
const initalHeroState = {
    numberOfHeroes : 0
}
const initalMovieState = {
    numberOfMovies : 0
}
 
// reducers
const heroReducer = (state = initalHeroState, action)=>{
    switch(action.type){
        case ADD_HERO : return {...state, numberOfHeroes : state.numberOfHeroes + 1 }
        case REMOVE_HERO : return {...state, numberOfHeroes : state.numberOfHeroes - 1 }
        default : return state
    }
}
const movieReducer = (state = initalMovieState, action)=>{
    switch(action.type){
        case ADD_MOVIE : return {...state, numberOfMovies : state.numberOfMovies + 1 }
        case REMOVE_MOVIE : return {...state, numberOfMovies : state.numberOfMovies - 1 }
        default : return state
    }
}
//combine reducers
const rootReducer = combineReducers({
    heroes : heroReducer,
    movies : movieReducer
});
 
 
// store
const store = createStore( rootReducer );
 
console.log( store.getState() );
 
store.subscribe( ()=> {
    console.log( store.getState() )
})
 
store.dispatch( addHero() );
store.dispatch( addHero() );
store.dispatch( addMovie() );
store.dispatch( addMovie() );
store.dispatch( addMovie() );
store.dispatch( addMovie() );
store.dispatch( addMovie() );
store.dispatch( addHero() );
store.dispatch( addHero() );
store.dispatch( removeHero() );
store.dispatch( removeHero() );
store.dispatch( removeHero() );
store.dispatch( removeMovie() );
store.dispatch( removeMovie() );
store.dispatch( addHero() );
store.dispatch( addHero() );