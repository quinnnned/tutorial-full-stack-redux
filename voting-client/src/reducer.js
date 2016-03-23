import {List, Map} from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function vote(state, entry) {
    const currentPair = state.getIn(['vote', 'pair']);
    
    if (!currentPair) return state;
    if (!currentPair.includes(entry)) return state;
    
    return state.set('hasVoted', entry);
}


function resetVote(state) {
    const hasVoted = state.get('hasVoted');
    if (!hasVoted) return state;
    
    const currentPair = state.getIn(['vote', 'pair'], List());
    if (currentPair.includes(hasVoted)) return state;
    
    return state.remove('hasVoted');
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE' : return resetVote(setState(state, action.state));
        case 'VOTE'      : return vote(state, action.entry);
    }
    return state;
}