import React, { useEffect } from 'react'
import { getEmseforsAPI } from '../utility/querys'
import Header from '../components/header/Header';
import EmseforsItem from '../components/emsefors/EmseforsItem';

const EmseforsPage = () => {


    const getEmsefors = async () => {

        const emsefors_data = await getEmseforsAPI();

        console.log(emsefors_data);

    }


    useEffect(() => {
        getEmsefors();
    })

    return (
        <>
            <Header></Header>

            <div className="page-wrapper">
                <div className="container">

                    <div className="row pt-5">

                        <EmseforsItem idempresa={'BP01'} name={'Chouvin  Gerardo Olivier Chouvin  Gerardo Olivier'}></EmseforsItem>
                        <EmseforsItem idempresa={'BP01'} name={'Chouvin  Gerardo Olivier'}></EmseforsItem>


                    </div>

                </div>

            </div>
        </>
    )
}

export default EmseforsPage