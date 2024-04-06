import React, { useEffect, useState } from 'react'
import ItemSimpleResumen from '../../components/empresas/resumen-items/ItemSimpleResumen'
import TimelineTable from '../../components/planificacion-gant/TimelineTable'
import { getPlanificacionByIdRodalAPI } from '../../utility/querys'

const PlanificacionIntervenciones = ({ rodales }) => {


    const [dataPlanificacion, setDataPlanificacion] = useState(null);
    const [years, setYears] = useState(null);
    const [planificacion, setPlanificacion] = useState(null);

    const getPlanificacionData = async (idrodal) => {

        let data_plani = await getPlanificacionByIdRodalAPI(rodales.pk)

        setYears(data_plani[0].data.years);
        setDataPlanificacion(data_plani);
        //console.log(data_plani);
    }


    useEffect(() => {

        if(rodales != null){
            getPlanificacionData();

        }

      

    }, [rodales])


    return (
        <>

            <div className="container">

                <div className="row mb-5">
                    <div className="col-lg-12">
                        <h1 className="text-center text-white">Cronograma de Intervenciones</h1>
                    </div>

                </div>




                <div className="row mb-5 justify-content-center">

                    <div className="col-lg-12 mb-7">
                            <h2 className="h2 text-white">Referencias</h2>
                    </div>


                    <div className="col-lg-12">
                        <div className="card bg-transparent">
                            <TimelineTable data_planificacion={dataPlanificacion} years_data={years}></TimelineTable>

                        </div>
                    </div>
                

                   





                </div>


            </div>
        </>
    )
}

export default PlanificacionIntervenciones