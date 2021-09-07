/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import axios from 'axios';

let endpoint = `http://localhost:3000/catalog`;

export const getAllProductsFromStorage = (request) => {
    return new Promise((resolve, reject) => {
        axios.get(`${endpoint}`, {params: request})
        .then(response => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const getDefaultProducts = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${endpoint}`)
        .then(response => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    }) 
}

export const getFilterProducts = (request) => {
    return new Promise((resolve, reject) => {
        axios.get(`${endpoint}`, {
            params: request
        })
        .then(response => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    }) 
}

export const getProductDetails = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${endpoint}`, {
            params: id
        })
        .then(response => {
            resolve(response.data[0])
        }).catch((error) => {
            reject(error)
        })
    }) 
}