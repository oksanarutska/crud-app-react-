export class AppBackend {
    constructor() {
        this.baseUrl = 'https://5bf417c491c25b0013a3b9a2.mockapi.io'
    }

    isDevEnvironment() {
        return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    }

    get({page = 1, limit = 5, search = ''}) {
        return fetch(`${this.baseUrl}/users?page=${page}&limit=${limit}&search=${search}`)
            .then(function (response) {
                return response.json();
            })
    }

    create(user) {
        return fetch(`${this.baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }

    delete(id) {
        return fetch(`${this.baseUrl}/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    update(user) {
        return fetch(`${this.baseUrl}/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
    }
}

