import React, { useContext, useEffect } from 'react'
import ItemsActions from '../../items-actions/ItemsActions'
import { SCREENS_EMPRESAS } from '../../../utility/SCREENS';
import { EmpresasGlobalContext } from '../../../context/globalcontext';

const ItemsActionsContainer = () => {

    const { screen, setScreen,
        stateScreen, setStateScreen} = useContext(EmpresasGlobalContext);
        
        


    const description_rodales = 'Rodales administrados por la empresa';


    useEffect(() => {

    }, [])


    return (
        <div className="list-group list-group-flush list-group-hoverable">

            <ItemsActions description={description_rodales} screen_current={SCREENS_EMPRESAS.RODALES_RESUMEN}></ItemsActions>

            <ItemsActions description={'Expedientes Sagpyas'} screen_current={SCREENS_EMPRESAS.SAGPYAS_RESUMEN}></ItemsActions>

            <ItemsActions description={'Producción Forestal'} screen_current={SCREENS_EMPRESAS.PRODUCCION_RESUMEN}></ItemsActions>

            <ItemsActions description={'Resumen de Costos'} screen_current={SCREENS_EMPRESAS.COSTOS_RESUMEN}></ItemsActions>

        </div>
    )
}

export default ItemsActionsContainer