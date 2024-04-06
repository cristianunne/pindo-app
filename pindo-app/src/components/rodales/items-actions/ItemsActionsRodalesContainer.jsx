
import React, { useContext, useEffect } from 'react'
import ItemsActions from '../../items-actions/ItemsActions'
import { SCREENS_EMPRESAS, SCREENS_RODALES } from '../../../utility/SCREENS';
import { RodalesGlobalContext } from '../../../context/globalcontext';
import ItemsActionsRodales from '../../items-actions/ItemsActionsRodales';

const ItemsActionsRodalesContainer = () => {

    const { screen, setScreen,
        stateScreen, setStateScreen} = useContext(RodalesGlobalContext);

    
    useEffect(() => {

       if(screen == null){
        setScreen(SCREENS_RODALES.GENERAL);
       }

    })

    return (
        <div className="list-group list-group-flush list-group-hoverable">
         

        <ItemsActionsRodales description={'Información general del Rodal'} screen_current={SCREENS_RODALES.GENERAL}></ItemsActionsRodales>

        <ItemsActionsRodales description={'Planificacio de Intervenciones'} screen_current={SCREENS_RODALES.PLANIFICACION_INTERVENCIONES}></ItemsActionsRodales>

       
        <ItemsActions description={'Producción Forestal'} screen_current={SCREENS_EMPRESAS.PRODUCCION_RESUMEN}></ItemsActions>

        <ItemsActions description={'Resumen de Costos'} screen_current={SCREENS_EMPRESAS.COSTOS_RESUMEN}></ItemsActions>

    </div>
    )
}

export default ItemsActionsRodalesContainer