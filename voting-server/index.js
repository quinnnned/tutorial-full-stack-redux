import makeStore from './src/store';
import startServer from './src/server';

export const store = makeStore();

startServer(store);

// Load initial entries from .json
store.dispatch({
    type: 'SET_ENTRIES',
    entries: require('./entries.json')
});

// Step
store.dispatch({type: 'NEXT'});


