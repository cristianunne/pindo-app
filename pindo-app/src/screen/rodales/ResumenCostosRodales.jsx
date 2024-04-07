import React, { useEffect, useRef, useState } from 'react'
import ItemSimpleResumen from '../../components/empresas/resumen-items/ItemSimpleResumen';
import RodalesIcon from '../../icons/RodalesIcon';
import TableCostosByYearsEmpresa from '../../components/empresas/tables/TableCostosByYearsEmpresa';
import { getResumenCostosByRodalAPI, getResumenCostosByYearsByRodalAPI } from '../../utility/querys';

const ResumenCostosRodales = ({ rodales }) => {
    const [dataResumenCostos, setDataResumenCostos] = useState(null);
    const [dataByYears, setDataByYears] = useState(null);
    const [dataCostosRodalesYears, setDataCostosRodalesYears] = useState(null);

    const [resState, setResState] = useState(false);

    const imputado = useRef(0);
    const unidades = useRef(0);
    const valorUnidad = useRef(0);

    const getResumenCostos = async () => {

        const data_costos = await getResumenCostosByRodalAPI(rodales.sap_id);
        //getResumenCostosByYearsByRodalAPI
        const data_by_years = await getResumenCostosByYearsByRodalAPI(rodales.sap_id);
        

        if(data_costos){

            setDataResumenCostos(data_costos);
            //actualizo los ref
            imputado.current = data_costos.length > 0 ? data_costos[0].suma_imputado : 0;
            unidades.current = data_costos.length > 0 ? data_costos[0].suma_unidades : 0;
            valorUnidad.current = unidades.current != 0 ? (imputado.current / unidades.current) : 0;

        }

        if(data_by_years){
            setDataByYears(data_by_years);
        }


    }


    useEffect(() => {


        getResumenCostos();


    }, []);


    return (
        <div className="container" style={{ marginBottom: '150px' }}>
            <div className="row mb-5">
                <div className="col-lg-12">
                    <h1 className="text-center text-white">Resumen de Costos</h1>
                </div>

            </div>



            <div className="row row-cards mb-5 justify-content-center">

                <ItemSimpleResumen title={'Total Imputado'} value={imputado.current} unidad={'($)'} unidad_position={1}
                    icon={<RodalesIcon width={24} height={24}></RodalesIcon>}></ItemSimpleResumen>

                <ItemSimpleResumen title={'Total Unidades'} value={unidades.current} unidad={'($)'} unidad_position={1}
                    icon={<RodalesIcon width={24} height={24} ></RodalesIcon>}></ItemSimpleResumen>

                <ItemSimpleResumen title={'Valor de Unidad'} value={valorUnidad.current} unidad={'($)'} unidad_position={1}
                    icon={<RodalesIcon width={24} height={24} ></RodalesIcon>}></ItemSimpleResumen>


            </div>

            <div className="row mt-6 justify-content-center p-0">

                <div className="col-lg-12">
                    <h2 className="h2 text-white">Resumen de Costos agrupados por año</h2>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="card bg-transparent">

                    <div id='card-body-table-rodal-resumen' className="card-body" style={{ maxHeight: '600px', overflow: 'auto' }}>
                        <TableCostosByYearsEmpresa data_costos={dataByYears}></TableCostosByYearsEmpresa>
                    </div>

                </div>
            </div>

            

        </div>
    )
}

export default ResumenCostosRodales