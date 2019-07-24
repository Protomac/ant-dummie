import axios from 'axios'

import {apiUrl} from './settings'

export const API_URL = apiUrl

let authAxios = axios.create({
    baseURL: apiUrl
})


let getToken = () => {
    return ({'headers': {'Authorization': 'Bearer ' + localStorage.getItem('token')}})
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
                    next({error: true, err})
                    this.error(err)
                })

        })
    }

    getAllUser(data) {
        return new Promise((next) => {
            authAxios
                .get('/users', {params: {...data}}, getToken())
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({error: true, err})
                    this.error(err)
                })

        })
    }

    addUser(data) {
        return new Promise((next) => {
            authAxios
                .post('/users', {...data}, getToken())
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({error: true, err})
                    this.error(err)
                })

        })
    }

    addCust(data) {
        return new Promise((next) => {
            authAxios
                .post('/register/customer', {...data}, getToken())
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({error: true, err})
                    this.error(err)
                })

        })
    }

    addInstitution(data) {
        return new Promise((next) => {
            authAxios
                .post('/institution', {...data})
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({error: true, err})
                    this.error(err)
                })

        })
    }

    getInstitution({id}) {
        return new Promise((next) => {
            authAxios
                .get(`/institution/${id}`, getToken())
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({error: true, err})
                    this.error(err)
                })

        })
    }

    editInstitution(data, {id}) {
        return new Promise((next) => {
            authAxios
                .put(`/institution/${id}`, {...data}, getToken())
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({error: true, err})
                    this.error(err)
                })

        })
    }

    deleteInstitution({id}) {
        return new Promise((next) => {
            authAxios
                .delete(`/institution/${id}`, getToken())
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({error: true, err})
                    this.error(err)
                })

        })
    }

    getAllInstitution(data) {
        return new Promise((next) => {
            authAxios
                .get('/institution', {params: {...data}})
                .then((d) => {
                    next(d.data)
                })
                .catch((err) => {
                    next({error: true, err})
                    this.error(err)
                })

        })
    }

    addMakes(data) {
        return new Promise((next) => {

            authAxios.post('/backOffice/make', {...data}, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    getAllMakes(data) {
        return new Promise((next) => {
            authAxios.get('/backOffice/make', {params: {...data}}, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    getAllModels(data) {
        return new Promise((next) => {
            authAxios.get('/backOffice/make/model/' + data.make, {params: {...data}}, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    addFuel(data) {
        return new Promise((next) => {
            authAxios.post('/backOffice/fuelType', data, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    getAllFuels(data) {
        return new Promise((next) => {
            authAxios.post('/backOffice/make/model/fuelTypes', data, getToken())
                .then((d) => {

                    next(d)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    editFuelType(data) {
        return new Promise((next) => {
            authAxios.put('/backOffice/fuelType/' + data._id, data, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    getFuel({id, modelId}) {
        return new Promise((next) => {
            authAxios.get('/backOffice/fuel/' + id, {params: {modelId}}, getToken())
                .then((d) => {
                    next(d)
                }).catch((err) => {
                next({error: true, err})
            })

        })
    }

    getVariant(data) {
        return new Promise((next) => {
            authAxios.post('/backOffice/variant/data', data, getToken())
                .then((d) => {
                    next(d)
                }).catch((err) => {
                next({error: true, err})
            })

        })
    }

    deleteFuel(data) {
        return new Promise((next) => {
            let {val} = data

            authAxios.delete('/backOffice/fuelType/' + val._id, {data})
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    deleteVariant(data) {
        return new Promise((next) => {
            let {val} = data

            authAxios.delete('/backOffice/variant/' + val._id, {data})
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    getMake({id}) {
        return new Promise((next) => {
            authAxios.get('/backOffice/make/' + id, {}, getToken())
                .then((d) => {
                    next(d.data)

                }).catch((err) => {
                next({error: true, err})
            })


        })
    }


    editMake(data) {
        return new Promise((next) => {
            authAxios.put('/backOffice/make/' + data._id, {params: {...data}}, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }


    deleteMake(data) {
        return new Promise((next) => {
            authAxios.delete('/backOffice/make/' + data._id, {params: {...data}}, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    addModel(data) {
        return new Promise((next) => {

            authAxios.post('/backOffice/model', {...data}, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    editModel(data) {
        return new Promise((next) => {
            authAxios.put('/backOffice/model/' + data.modelId, data, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    deleteModel(data) {
        return new Promise((next) => {
            let {val} = data
            // axios.delete(url, { data: { foo: "bar" } });

            authAxios.delete('/backOffice/model/' + data.make, {data: val})
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    getModel({id}) {
        return new Promise((next) => {
            authAxios.get('/backOffice/model/' + id, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    addVariant(data) {
        return new Promise((next) => {
            authAxios.post('/backOffice/variant', data, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    getAllVariants(data) {
        return new Promise((next) => {
            authAxios.post('/backOffice/make/model/fuelType/variants', data, getToken())
                .then((d) => {
                    next(d)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    editVariant(data) {
        return new Promise((next) => {
            authAxios.put('/backOffice/variant/' + data._id, data, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }


    addCar(data) {
        return new Promise((next) => {

            authAxios.post('/car', {...data}, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    getAllCars(data) {
        return new Promise((next) => {
            authAxios.get('/backOffice/cars', {params: {...data}}, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    getAllDealers(data) {
        return new Promise((next) => {
            authAxios.get('/backOffice/dealers', {params: {...data}}, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    getAllRequirements(data) {
        return new Promise((next) => {
            authAxios.get('/backOffice/requirements', {params: {...data}}, getToken())
                .then((d) => {

                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    dealerFavDealer(data) {
        return new Promise((next) => {
            let d = {}
            d.id = data
            authAxios.post('/backOffice/dealers/favorite/list', d, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }


    deleteDealer(data) {
        return new Promise((next) => {
            authAxios.delete('/backOffice/dealer/' + data._id, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    deleteCar(data) {
        return new Promise((next) => {
            authAxios.delete('/backOffice/car/' + data._id, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    carImage(data) {
        return new Promise((next) => {
            authAxios.post('/backOffice/car/getCarImage', data, getToken())
                .then((d) => {
                    next(d.data)
                }).catch((err) => {
                next({error: true, err})
            })


        })
    }

    getAllTickets(data) {
        return new Promise((next) => {
            authAxios
                .get('/admin/tickets', {params: {...data}}, getToken())
                .then((d) => {
                    next(d.data)

                })
                .catch((err) => {
                    next({error: true, err})
                    this.error(err)
                })

        })
}
}

export default new Request()
