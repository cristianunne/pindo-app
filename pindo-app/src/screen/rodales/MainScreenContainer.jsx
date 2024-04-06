import React, { useContext, useEffect, useState } from 'react'
import { RodalesGlobalContext } from '../../context/globalcontext';
import ResumenGeneralRodales from './ResumenGeneralRodales';
import { SCREENS_RODALES } from '../../utility/SCREENS';
import PlanificacionIntervenciones from './PlanificacionIntervenciones';

const MainScreenContainer = ({rodales}) => {

    const { screen, setScreen,
        stateScreen, setStateScreen} = useContext(RodalesGlobalContext);

        
        

    useEffect(() => {

        


    }, [rodales, stateScreen])


    return (
        <>
        {screen == SCREENS_RODALES.GENERAL ? <ResumenGeneralRodales rodales={rodales}></ResumenGeneralRodales>  :
         screen == SCREENS_RODALES.PLANIFICACION_INTERVENCIONES ? <PlanificacionIntervenciones rodales={rodales}></PlanificacionIntervenciones> 
        : null}
    </>
    )
}

export default MainScreenContainer