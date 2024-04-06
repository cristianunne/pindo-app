import React, { useEffect, useState } from 'react'
import { getEmpresasAPI } from '../utility/querys'
import Header from '../components/header/Header'
import EmpresasItem from '../components/empresas/EmpresasItem'


const EmpresasPage = () => {


    const [dataEmpresas, setDataEmpresas] = useState([]);
    const [state, setState] = useState(false);

    const getEmpresas = async () => {

        const emsefors_data = await getEmpresasAPI();
        console.log(emsefors_data);

        setDataEmpresas(emsefors_data);
        setState(true);
       
    }

    useEffect(() => {

        if(!state){

            getEmpresas();
            console.log('entro acadespues de empresas');

          

        }

       
      
    }, [state])

    return (
        <>
            <Header></Header>


            <div className="page-wrapper">
                <div className="container">

                    <div className="row pt-5">

                        {dataEmpresas.length > 0 ? dataEmpresas.map((emp, index) => {
                            return (<EmpresasItem key={index} idempresa={emp.sap_id} name={emp.name} address={emp.address} 
                                email={emp.email} empresa={emp}></EmpresasItem>)
                        }) : null
                        }


                    </div>

                </div>

            </div>
        </>
    )
}

export default EmpresasPage