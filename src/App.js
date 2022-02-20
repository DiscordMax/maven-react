import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { HomePage, LostPage, TeamPage } from './pages';
import { footer } from './pages/footer';

function App() {
    return ( 
        <Switch>
        <Route path = "/" exact = { true } component = { HomePage } />
        <Route path = "/404" exact = { true } component = { LostPage } />          
        <Route path = "/team" exact = { true } component = { TeamPage } />
        <Route path = "/footer" exact = { true } component = { footer } /> 
        </Switch>
    );
}

export default App;
