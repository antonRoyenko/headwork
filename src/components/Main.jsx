import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {Detail} from '../containers/index';
import List from '../containers/MainList/List'
import {Profile} from './index';

export const Main = () => (
    <main className="grey lighten-4">
            <Switch>
                <Route exact path='/' component={List}/>
                <Route path='/detail' component={Detail}/>
                <Route path='/profile' component={Profile}/>
            </Switch>
    </main>
);
