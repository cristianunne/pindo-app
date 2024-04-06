import React, { useContext, useEffect, useState } from 'react'
import { RodalesGlobalContext } from '../../context/globalcontext';
import ResumenGeneralRodales from './ResumenGeneralRodales';

const MainScreenContainer = ({rodales}) => {

    const { screen, setScreen,
        stateScreen, setStateScreen} = useContext(RodalesGlobalContext);

        
        

    useEffect(() => {

        console.log('rodales');

        console.log(rodales);


    }, [rodales, stateScreen])


    return (
        <>
        {screen == null ? <ResumenGeneralRodales rodales={rodales}></ResumenGeneralRodales>  : null}
    </>
    )
}

export default MainScreenContainer