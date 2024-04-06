import React, { useEffect } from 'react'
import ItemSimpleResumen from '../../components/empresas/resumen-items/ItemSimpleResumen'
import RodalesIcon from '../../icons/RodalesIcon'
import UsoResumenGraphicsContainer from '../../components/empresas/graphics/UsoResumenGraphicsContainer'

const ResumenGeneral = ({ empresa }) => {




    useEffect(() => {

        console.log('resumengenrefsdfdgsgasdas');

    });


    return (
        <>
            
            <div className="container">

                <div className="row mb-5">
                    <div className="col-lg-12">
                        <h1 className="text-center text-white">Resumen General</h1>
                    </div>

                </div>

                <div className="row row-cards mb-5 justify-content-center">

                    <ItemSimpleResumen title={'Cantidad de Rodales'} value={1500} unidad={''}
                        icon={<RodalesIcon width={24} height={24}></RodalesIcon>}></ItemSimpleResumen>

                    <ItemSimpleResumen title={'Superficie Total'} value={10000} unidad={'ha'}
                        icon={<RodalesIcon width={24} height={24}></RodalesIcon>}></ItemSimpleResumen>

                    <ItemSimpleResumen title={'Superficie Plantada'} value={7400} unidad={'ha'}
                        icon={<RodalesIcon width={24} height={24}></RodalesIcon>}></ItemSimpleResumen>

                </div>

                <div className="row mt-6 justify-content-center p-0">

                    <UsoResumenGraphicsContainer empresa={empresa}></UsoResumenGraphicsContainer>

                </div>
            </div>
        </>
    )
}

export default ResumenGeneral