
import React, { useContext, useEffect } from 'react'
import ItemsActions from '../../items-actions/ItemsActions'
import { SCREENS_EMPRESAS } from '../../../utility/SCREENS';
import { RodalesGlobalContext } from '../../../context/globalcontext';

const ItemsActionsRodalesContainer = () => {

    const { screen, setScreen,
        stateScreen, setStateScreen} = useContext(RodalesGlobalContext);

    
    useEffect(() => {

    })

    return (
        <div className="list-group list-group-flush list-group-hoverable">

        <ItemsActions description={'Información general del Rodal'} screen_current={SCREENS_EMPRESAS.RODALES_RESUMEN}></ItemsActions>

        <ItemsActions description={'Intervenciones'} screen_current={SCREENS_EMPRESAS.SAGPYAS_RESUMEN}></ItemsActions>

        <ItemsActions description={'Producción Forestal'} screen_current={SCREENS_EMPRESAS.PRODUCCION_RESUMEN}></ItemsActions>

        <ItemsActions description={'Resumen de Costos'} screen_current={SCREENS_EMPRESAS.COSTOS_RESUMEN}></ItemsActions>

    </div>
    )
}

export default ItemsActionsRodalesContainer