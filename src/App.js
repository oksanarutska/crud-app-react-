import React, {Component} from 'react';
import './App.css';
import {Header} from "./componens/Header/Header";
import {TableUsers} from "./componens/TableUSers/TableUsers";
import {ButtonUser} from "./componens/Button";
import {AppBackend} from "./AppBackend";
import {ModalAddUser} from  "./componens/Modal/Modal.jsx"

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            limit: 5,
            search: '',
            page: 1
        };
        this.backend = new AppBackend();
    }

    async componentDidMount() {
        const users = await this.backend.get({limit: this.state.limit});
        this.setState({
            users
        });
    }

    onSelectChange = (event) => {
        const limit = event.target.value;
        this.setState({limit}, () => {
            this.updateUsers();
        })
    };

    onSearchChange = (event) => {
        const search = event.target.value;
        this.setState({search}, () => {
            this.updateUsers();
        })
    };

    onPageChange = (page) => {
        this.setState({page}, () => {
            this.updateUsers();
        })
    };

    updateUsers = async () => {
        const {limit, search, page} = this.state;
        const users = await this.backend.get({
            search,
            limit,
            page,
        });
        this.setState({
            users
        });
    };

    onDelete(userId) {
        this.backend.delete(userId)
            .then(_ => {
                this.updateUsers();
            });
    }

    render() {

        return (
            <div>
<ModalAddUser/>
                <Header onSearchChange={this.onSearchChange} onSelectChange={this.onSelectChange}
                        limit={this.state.limit}/>

                <TableUsers users={this.state.users} onDelete={this.onDelete.bind(this)}/>

                <ButtonUser onPageChange={this.onPageChange}
                            currentPage={this.state.page}/>

            </div>

        );
    }
}

export default App;
