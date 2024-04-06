import React, { useContext, useEffect, useState } from 'react'
import ResumenGeneral from './ResumenGeneral';
import { EmpresasGlobalContext } from '../../context/globalcontext';
import { SCREENS_EMPRESAS } from '../../utility/SCREENS';
import RodalesResumen from './RodalesResumen';
import SagpyasResumenEmpresas from './SagpyasResumenEmpresas';
import ProduccionResumenEmpresa from './ProduccionResumenEmpresa';
import ResumenCostos from './ResumenCostos';


const MainScreenContainer = ({empresa}) => {

    const { screen, setScreen,
        stateScreen, setStateScreen} = useContext(EmpresasGlobalContext);
    

        useEffect(() => {

            console.log('reinicio del componente MAIN Screen');
            console.log(empresa);

        }, [empresa, stateScreen])

    return (
        <>
            {screen == null ? <ResumenGeneral empresa={empresa}></ResumenGeneral> : 
            screen == SCREENS_EMPRESAS.RODALES_RESUMEN ? <RodalesResumen empresa={empresa}></RodalesResumen> : 
             screen == SCREENS_EMPRESAS.SAGPYAS_RESUMEN ? <SagpyasResumenEmpresas empresa={empresa}></SagpyasResumenEmpresas> : 
             screen == SCREENS_EMPRESAS.PRODUCCION_RESUMEN ? <ProduccionResumenEmpresa empresa={empresa}> </ProduccionResumenEmpresa> : 
             screen == SCREENS_EMPRESAS.COSTOS_RESUMEN ? <ResumenCostos empresa={empresa}></ResumenCostos> : null}
        </>
    )
}

export default MainScreenContainer