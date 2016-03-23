

// React Libs
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

// Redux Libs
import {createStore, applyMiddleware} from 'redux';

// React-Redux Libs
import {Provider} from 'react-redux';

// Server Connection
import io from 'socket.io-client';

// Project Files 
import reducer from './reducer';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

const socket = io(`${location.protocol}//${location.hostname}:8080`);
const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);
socket.on('state', state => store.dispatch(setState(state)));

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route component = {App}>
                <Route path="/results"  component={ResultsContainer} />
                <Route path="/"         component={VotingContainer} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app') );
