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
    register(data) {
        return new Promise((next, error) => {
            authAxios
                .post('/registerPage', data)
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }

    leaveList(data) {
        return new Promise((next, error) => {
            authAxios
                .get('/admin/leavelist', { params: { ...data } }, getToken())
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err);
                })
        })
    }
    employeeData(data){
        return new Promise((resolve, error)=>{
            authAxios
                .get('/admin/employeeData',{params: {...data}}, getToken())
                .then((d)=>{
                    resolve(d.data)
                })
                .catch((err)=>{
                    resolve({error: true, err})
                    this.error(err)
                })
        })
    }
    adminAction(data, status,id){
        console.log(id)
        return new Promise((resolve, error)=>{

            authAxios
                .post(`/admin/${id}/action`, {data,status}, getToken())
                .then((d)=>{
                    resolve(d.data)
                })
                .catch((error)=>{
                    resolve({error: true, error})
                    this.error(error)
                })
        })
    }

    employeReport(data, id){
        console.log(id)
        return new Promise((resolve)=>{
            authAxios
                .get(`/employee/${id}/report`, data, getToken())
                .then((d)=>{
                    resolve(d.data)
                })
                .catch((error)=>{
                    resolve({error:true, error})
                    this.error(error)
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

    addEmployee(data) {
        return new Promise((next) => {
            authAxios
                .post('/addEmployee', {...data}, getToken())
                .then((d) => {
                    console.log(d);
                    next(d.data)
                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }

    updateEmployee(id,data) {
        return new Promise((next) => {
            authAxios
                .put('/employee/'+id, {...data}, getToken())
                .then((d) => {
                    console.log(d);
                    next(d.data)
                })
                .catch((err) => {
                    next({ error: true, err })
                    this.error(err)
                })

        })
    }

    deleteEmployees(ids){
        return new Promise((next) =>{
            authAxios
                .post('/employee/delete',{ids},getToken())
                .then((data)=>{
                    next(data.data)
                })
                .catch(err=>{
                    next({error:true,err})
                    this.error(err)
                })
        })
    }

    getAllEmp(data){
        return new Promise((next) =>{
            authAxios
                .get('/getAllEmployees',{params: {...data}},getToken())
                .then((data)=>{
                    next(data)
                })
                .catch(err=>{
                    next({error:true,err})
                })
        })
    }

    addInstitution(data) {
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
    empDashboard(data) {
        let empId = "5d36aee5ff6af4290c7f2850"
        return new Promise((next) => {
            authAxios
                .get(`/employees/${empId}/dashboard`, { params: { ...data } }, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                    next({ error: true, err })
                })


        })
    }
    employeeData(data) {
        return new Promise((next) => {
            authAxios
                .get(`/admin/employeeData`, { params: { ...data } }, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                    next({ error: true, err })
                })


        })
    }

    adminDashboard(data) {
        console.log(data)
        return new Promise((next) => {
            authAxios
                .get(`/admin/dashboard`, { params: { ...data } }, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                    next({ error: true, err })
                })


        })
    }

    previousAttendance(data) {
        console.log(data)
        return new Promise((next) => {
            authAxios
                .get(`/admin/previousAttendance`, { params: { ...data } }, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                    next({ error: true, err })
                })


        })
    }
    currentAttendance(data) {
        console.log(data)
        return new Promise((next) => {
            authAxios
                .get(`/admin/currentAttendance`, { params: { ...data } }, getToken())
                .then((d) => {
                    console.log(d.data)
                    next(d.data)
                }).catch((err) => {
                    next({ error: true, err })
                })


        })
    }
    overallAttendance(data) {
        console.log(data)
        let empId="5d36aee5ff6af4290c7f2850"
        return new Promise((next) => {
            authAxios
                .get(`/employee/${empId}/overallAttendance`, { params: { ...data } }, getToken())
                .then((d) => {
                    console.log(d.data)
                    next(d.data)
                }).catch((err) => {
                    next({ error: true, err })
                })


        })
    }
}

export default new Request()