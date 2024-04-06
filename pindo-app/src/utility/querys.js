import { URLS } from "./URLS";
import axios from 'axios';


export const getEmseforsAPI = async () => {

    /*let headers = new Headers();


    headers.append('Accept', 'application/json'); // This one is enough for GET requests
    headers.append('Content-Type', 'application/json'); // This one sends body
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET');


    //Methods' 'GET, POST, OPTIONS'


    const rawResponse = await fetch(URLS.EMSEFORS_GET, {
        method: 'GET',
        headers: headers

    });

    try {
        const content = rawResponse.json();

        return content;
    } catch (err) {
        console.log(err);
        return false;
    }*/

    return await axios.get(URLS.EMSEFORS_GET)
    .then(response => response.data)

}

export const getEmpresasAPI = async () => {
    
       
    return await axios.get(URLS.EMPRESAS_GET, {responseType: "json", transformResponse: JSON.parse})
    .then(response => response.data)

}

export const getEmpresasByIdAPI = async (id_empresa) => {
    
       
    return await axios.get(URLS.EMPRESAS_GET_BY_ID+ `/${id_empresa}/`, {responseType: "json", transformResponse: JSON.parse})
    .then(response => response.data)

}


export const getResumenPlantacionesByUsoAPI = async (id_empresa) => {

    
    return await axios.get(URLS.EMPRESAS_GET_PLANTACION_USO + `/${id_empresa}/`, {
        responseType: "json", transformResponse: JSON.parse})
    .then(response => response.data)

}


export const getSuperficiePlantacionesByYearsEmpresaAPI = async (id_empresa) => {

    
    return await axios.get(URLS.EMPRESAS_GET_PLANTACION_BY_YEARS + `/${id_empresa}/`, {
        responseType: "json", transformResponse: JSON.parse})
    .then(response => response.data)

}


export const getRodalesByEmpresaAPI = async (id_empresa) => {

    
    return await axios.get(URLS.EMPRESAS_GET_RODALES + `/${id_empresa}/`, {
        responseType: "json", transformResponse: JSON.parse})
    .then(response => response.data)

}

export const getSagpyasByEmpresaAPI = async (id_empresa) => {

    
    return await axios.get(URLS.EMPRESAS_GET_SAGPYAS + `/${id_empresa}/`, {
        responseType: "json", transformResponse: JSON.parse})
    .then(response => response.data)

}

export const getRodalesSagpyasByEmpresaAPI = async (id_empresa) => {

    
    return await axios.get(URLS.EMPRESAS_GET_RODALES_SAGPYAS + `/${id_empresa}/`, {
        responseType: "json", transformResponse: JSON.parse})
    .then(response => response.data)

}


export const getProduccionByEmpresaAPI = async (id_empresa_sap) => {

    
    return await axios.post(URLS.EMPRESAS_GET_PRODUCCION, {
        filter: {
            empresa: id_empresa_sap
        } 
        
    })
    .then(response => response.data)

}

export const getProduccionByMaterialByEmpresaAPI = async (id_empresa_sap) => {

    
    
    return await axios.post(URLS.EMPRESAS_GET_PRODUCCION_BY_MATERIAL, {
        filter: {
            empresa: id_empresa_sap
        } 
        
    })
    .then(response => response.data)

}

export const getResumenCostosByEmpresaAPI = async (id_empresa_sap) => {

    
    return await axios.post(URLS.EMPRESAS_GET_RESUMEN_COSTOS, {
        filter: {
            empresa: id_empresa_sap
        } 
        
    })
    .then(response => response.data)

}

export const getResumenCostosByYearsByEmpresaAPI = async (id_empresa_sap) => {

    
    return await axios.post(URLS.EMPRESAS_GET_RESUMEN_COSTOS_BY_YEARS, {
        filter: {
            empresa: id_empresa_sap
        } 
        
    })
    .then(response => response.data)

}

export const getResumenCostosByYearsRodalesByEmpresaAPI = async (id_empresa_sap) => {

    
    return await axios.post(URLS.EMPRESAS_GET_RESUMEN_COSTOS_BY_YEARS_BY_RODALES, {
        filter: {
            empresa: id_empresa_sap
        } 
        
    })
    .then(response => response.data)

}


export const getRodalesByUsoAPI = async () => {

    
    return await axios.get(URLS.RODALES_GET_BY_USO + `/Forestal/`, {
        responseType: "json", transformResponse: JSON.parse})
    .then(response => response.data)


}

export const getRodalesGisByIdAPI = async (idrodal) => {

    
    return await axios.get(URLS.RODALESGIS_GET_BY_ID + `/${idrodal}/`, {
        responseType: "json", transformResponse: JSON.parse})
    .then(response => response.data)


}

export const getRodalesByIdAPI = async (idrodal) => {

    
    return await axios.get(URLS.RODALESGIS_GET_BY_ID + `/${idrodal}/`, {
        responseType: "json", transformResponse: JSON.parse})
    .then(response => response.data)


}