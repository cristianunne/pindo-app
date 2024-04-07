import React, { useEffect, useState } from 'react'
import ItemSimpleResumen from '../../components/empresas/resumen-items/ItemSimpleResumen'
import RodalesIcon from '../../icons/RodalesIcon'
import MapRodales from '../../components/rodales/map/MapRodales'

import '../../styles/rodales/rodales_details.css'
import { getRodalesGisByIdAPI } from '../../utility/querys'

const ResumenGeneralRodales = ({ rodales }) => {

    const [data, setData] = useState(null);

    const [rodalGis, setRodalGis] = useState(null);
    const [configMap, setConfigMap] = useState(null);

    const [area, setArea] = useState(0);
    const [areaPlantada, setAreaPlantada] = useState(0);
    const [cantidadParcelas, setCantidadParcelas] = useState(0);


    const getRodalGis = async (idrodal) => {

        //necesito traer la info del rodal tmb

        const data_gis = await getRodalesGisByIdAPI(idrodal);

        if (data_gis){

            setRodalGis(JSON.parse(data_gis[0].gis_rodal_inicial));
            setConfigMap(data_gis[1].config)
            setData(data_gis);

            //convierto a ha
            setArea(data_gis[3].extra.area / 10000);
            setAreaPlantada(data_gis[3].extra.sup_plantacion)
            setCantidadParcelas(data_gis[3].extra.cantidad_parcelas)
           
           
        }

    }


    


    useEffect(() => {

        if(rodales != null && rodalGis == null){

           getRodalGis(rodales.pk);

        }

    }, [rodales]);



    return (
        <>

            <div className="container">

                <div className="row mb-5">
                    <div className="col-lg-12">
                        <h1 className="text-center text-white">Resumen General</h1>
                    </div>

                </div>

                <div className="row row-cards mb-5 justify-content-center">


                    <ItemSimpleResumen title={'Superficie Total'} value={area} unidad={'ha'}
                        icon={<RodalesIcon width={24} height={24}></RodalesIcon>}></ItemSimpleResumen>

                    <ItemSimpleResumen title={'Superficie Plantada'} value={areaPlantada} unidad={'ha'}
                        icon={<RodalesIcon width={24} height={24}></RodalesIcon>}></ItemSimpleResumen>

                    <ItemSimpleResumen title={'Cantidad de Parcelas'} value={cantidadParcelas} unidad={''}
                        icon={<RodalesIcon width={24} height={24}></RodalesIcon>}></ItemSimpleResumen>

                </div>

                {/*<div className="row row-cards mb-5 justify-content-between">


                    <ItemSimpleResumen title={'Material Genético'} value={1500} unidad={''} style_card={1}
                        icon={<RodalesIcon width={24} height={24}></RodalesIcon>}></ItemSimpleResumen>
                        


    </div>*/}

          
                 <div className="row mb-5 justify-content-center">

                    <div className="col-lg-12 p-0" >
                        <div className='mb-7 card-rodales-details' style={{height: 700, backgroundColor: 'black'}}>
                        <MapRodales rodalGis={rodalGis} bound={configMap}></MapRodales>
                        </div>

                       
                    </div>

                 </div>
                       
               
            </div>
        </>
    )
}

export default ResumenGeneralRodales