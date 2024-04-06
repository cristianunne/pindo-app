const url_api = 'http://127.0.0.1:8000/api/';
const url_api_sap = 'http://localhost/sap_api/API/';

export const URLS = {


    EMSEFORS_GET: url_api + 'emsefors/getEmsefors',
    EMPRESAS_GET: url_api + 'empresas/getEmpresas',
    EMPRESAS_GET_BY_ID: url_api + 'empresas/getEmpresaById',

    EMPRESAS_GET_PLANTACION_USO: url_api +  'empresas/getResumenPlantacionesByUso',
    EMPRESAS_GET_PLANTACION_BY_YEARS: url_api +  'empresas/getResumenPlantacionesByYears',
    EMPRESAS_GET_RODALES: url_api + 'empresas/getRodalesByEmpresa',
    EMPRESAS_GET_SAGPYAS: url_api + 'empresas/getSagpyasByEmpresas',
    EMPRESAS_GET_RODALES_SAGPYAS: url_api + 'empresas/getRodalesSagpyasByEmpresas',

    EMPRESAS_GET_PRODUCCION: url_api_sap + 'getResumenProduccionByYears',
    EMPRESAS_GET_PRODUCCION_BY_MATERIAL: url_api_sap + 'getResumenProduccionByYearsByMaterial',
    EMPRESAS_GET_RESUMEN_COSTOS: url_api_sap + 'getResumenCostosByQuery',
    EMPRESAS_GET_RESUMEN_COSTOS_BY_YEARS: url_api_sap + 'getResumenCostosByYearsByQuery',
    EMPRESAS_GET_RESUMEN_COSTOS_BY_YEARS_BY_RODALES: url_api_sap + 'getResumenCostosByYearsRodalesByQuery',

    RODALES_GET_BY_ID: url_api + 'rodales/getRodalesById',
    RODALES_GET_BY_USO: url_api + 'rodales/getRodalesByUso',

    RODALESGIS_GET_BY_ID: url_api + 'gis/getRodalesGisById',

    PLANIFICACION_GET_BY_RODAL: url_api + 'planificacion/getPlanificacionIntervencionesByRodal'
}