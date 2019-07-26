import axios from 'axios'

import { apiUrl } from './settings'

export const API_URL = apiUrl

let authAxios = axios.create({
    baseURL: apiUrl
})


let getToken = () => {
    return ({ 'headers': { 'Authorization': 'Bearer ' + localStorage.getItem('token') } })
}


class Request {

    constructor() {

    }

    error = (err) => {
        try {
            if (err.response.status === 401) {
                localStorage.clear()
            }
        } catch (e) {
        }
    }

    login(data) {
        return new Promise((next, error) => {
            authAxios
                .post('/login', data)
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }

    getAllUser(data) {
        return new Promise((next) => {
            authAxios
                .get('/users', { params: { ...data } }, getToken())
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }

    addUser(data) {
        return new Promise((next) => {
            authAxios
                .post('/users', { ...data }, getToken())
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }

    addCust(data) {
        return new Promise((next) => {
            authAxios
                .post('/register/customer', { ...data }, getToken())
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }

    
    getAllTickets(data) {
        return new Promise((next) => {
            authAxios
                .get('/admin/tickets', { params: { ...data } }, getToken())
                .then((d) => {
                    next(d.data)

                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }

    getUnassignedTickets(data) {
        return new Promise((next) => {
            authAxios
                .get('/admin/tickets/unassigned', { params: { ...data } }, getToken())
                .then((d) => {
                    next(d.data)

                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }

    getAllEmployees(data) {
        return new Promise((next) => {
            authAxios
                .get('/getAllEmployees', { params: { ...data } }, getToken())
                .then((d) => {
                    next(d.data)

                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }

    updateData(data){
        return new Promise((next) => {
            console.log(data)
            authAxios
                .put('/admin/tickets', data , getToken())
                .then((d) => {
                    next(d.data)

                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }
}

export default new Request()
