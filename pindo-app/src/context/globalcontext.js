
import React from "react";

const EmpresasGlobalContext = React.createContext({ 

    screen: null, setScreen: () => {},
    reloadScreen: false, setReloadScreen: () => {}
    

});

export {EmpresasGlobalContext};


const RodalesGlobalContext = React.createContext({ 

    screen: null, setScreen: () => {},
    reloadScreen: false, setReloadScreen: () => {}
    

});

export {RodalesGlobalContext};