/**
 * 
 * Code implementation
 * @Author Ananth Gunasekarapandiyan
 * @Email ananth1626p@gmail.com
 * 
 */

import axios from 'axios';

let endpoint = `http://localhost:3000/facets`;

export const getAllFacet = () => {
    return new Promise((resolve, reject) => {
        axios.get(`${endpoint}`)
        .then(response => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    }) 
}

