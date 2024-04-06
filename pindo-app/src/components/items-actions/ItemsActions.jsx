import React, { useContext, useEffect, useState } from 'react'
import VerIcon from '../../icons/VerIcon'
import { EmpresasGlobalContext } from '../../context/globalcontext';

const ItemsActions = ({description, screen_current}) => {

    const { screen, setScreen,
        stateScreen, setStateScreen} = useContext(EmpresasGlobalContext);
        


    const [active, setActive] = useState(false);

    const onClick = () => {
       
        if(!active){
            setActive(true);

            //seteo el global
            setScreen(screen_current);
            setStateScreen(!stateScreen);

       } else {

            setActive(false);
            setScreen(null);
            setStateScreen(!stateScreen);

       }
    }

    useEffect(() => {

        if(screen == screen_current){

            setActive(true);

        } else {
            setActive(false);
        }


    }, [active, stateScreen])

    return (
        <div className="list-group-item" style={!active ? null : styles.active}>
            <div className="row align-items-center">

                <div className="col text-truncate">

                    <div className="d-block text-white text-truncate mt-n1">
                        {description}</div>
                </div>

                <div className="col-auto">
                    <a style={{cursor: 'pointer'}} onClick={onClick}>
                        <span className="avatar" >
                          <VerIcon width={24} height={24}></VerIcon>
                                
                        </span>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default ItemsActions

const styles = {
    active: {
        backgroundColor: '#133a68',
        color: '#FFFFFF'
    }
};