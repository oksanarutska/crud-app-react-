import React, {Component} from 'react';
import './App.css';
import {Header} from "./componens/Header/Header";
import {TableUsers} from "./componens/TableUSers/TableUsers";
import {ButtonUser} from "./componens/Button";


class App extends Component {
    render() {

        return (
            <div>

                <Header/>

                 <TableUsers/>

                <ButtonUser/>

            </div>

        );
    }
}

export default App;
