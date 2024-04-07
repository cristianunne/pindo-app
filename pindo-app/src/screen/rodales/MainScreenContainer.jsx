import React, { useContext, useEffect, useState } from 'react'
import { RodalesGlobalContext } from '../../context/globalcontext';
import ResumenGeneralRodales from './ResumenGeneralRodales';
import { SCREENS_RODALES } from '../../utility/SCREENS';
import PlanificacionIntervenciones from './PlanificacionIntervenciones';
import ResumenProduccionRodales from './ResumenProduccionRodales';
import ResumenCostosRodales from './ResumenCostosRodales';

const MainScreenContainer = ({ rodales }) => {

    const { screen, setScreen,
        stateScreen, setStateScreen } = useContext(RodalesGlobalContext);




    useEffect(() => {




    }, [rodales, stateScreen])


    return (
        <>

            {screen == SCREENS_RODALES.GENERAL ? <ResumenGeneralRodales rodales={rodales}></ResumenGeneralRodales> :
                screen == SCREENS_RODALES.PLANIFICACION_INTERVENCIONES ? <PlanificacionIntervenciones rodales={rodales}>
                </PlanificacionIntervenciones> :
                    screen == SCREENS_RODALES.PRODUCCION_RESUMEN ? <ResumenProduccionRodales rodales={rodales}>
                    </ResumenProduccionRodales> :
                        screen == SCREENS_RODALES.COSTOS_RESUMEN ? <ResumenCostosRodales rodales={rodales}>
                        </ResumenCostosRodales>

                            : null}
        </>
    )
}

export default MainScreenContainer