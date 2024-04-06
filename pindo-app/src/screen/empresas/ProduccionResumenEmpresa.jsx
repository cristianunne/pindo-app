import React, { useEffect, useState } from 'react'
import { getProduccionByEmpresaAPI, getProduccionByMaterialByEmpresaAPI } from '../../utility/querys';
import LineGr from '../../components/graphics/LineGr';
import TableProduccionByYears from '../../components/empresas/tables/TableProduccionByYears';
import TableProduccionByMaterialByYear from '../../components/empresas/tables/TableProduccionByMaterialByYear';
import MultiLine from '../../components/graphics/MultiLine';


const ProduccionResumenEmpresa = ({empresa}) => {

    const [dataProduccionYears, setDataProduccionYears] = useState([]);
    const [dataMaterialProduccion, setDataMaterialProduccion] = useState(null);
    const [dataYears, setDataYears] = useState([]);

    const [resState, setResState] = useState(false);

    //dataMaterialProduccion

    const [dataGraphicBar, setDataGraphicBar] = useState([])
    const [labelsBar, setLabelsBar] = useState([]);
    const [colorsBar, setColorsBar] = useState([]);

    const [dataGraphicMultiLine, setDataGraphicMultiLine] = useState(null)
    const [labelsMultiLine, setLabelsMultiLine] = useState([]);
    const [colorsMultiLine, setColorsMultiLine] = useState([]);

    

    const getProduccionByEmpresa = async () => {

        const data_prod = await getProduccionByEmpresaAPI(empresa.sap_id);

        const data_material = await getProduccionByMaterialByEmpresaAPI(empresa.sap_id);

        if(data_prod){

            setDataProduccionYears(data_prod);

            let data_graphic_ = [];
            let labels_ = [];
            let colors_ = [];

            //let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
            colors_.push('#2ecd71');


            data_prod.forEach((element, index) => {


                data_graphic_.push(
                    {
                        'x': element.year, 'y': parseFloat(element.produccion)
                    }

                );


            });

            setDataGraphicBar(data_graphic_);
            setLabelsBar(labels_);
            setColorsBar(colors_);

        }

        if(data_material){
            setDataMaterialProduccion(data_material);

            //uso este datos para construir el dataset

            let data_graphic_ = [];
            let labels_ = [];
            let colors_ = [];

            //labels serian los year
            //con este solamente voy a definir el data
            let dataset = [];

            data_material.data.map((value, index) => {

                let data_current = [];
                Object.entries(value.data).forEach(([key, val]) => {

                    data_current.push(
                        {
                            'x': key, 'y': parseFloat(val)
                        }
    
                    );
                });

                let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
                //ya tengo todo el data deun objeto
                dataset.push(
                    {
                        label: value.txtmaterial,
                        data: data_current,
                        borderColor: randomColor,
                        backgroundColor: randomColor,
                        borderWidth: 2

                    }
                );

            });

           setDataGraphicMultiLine(dataset);

        }
        setResState(true);

    }


    useEffect(() => {
        
        if(!resState){
            getProduccionByEmpresa();
        }
      
    }, [resState]);

    return (
        <>
        <div className="container" style={{ marginBottom: '150px' }}>
            <div className="row mb-5">
                <div className="col-lg-12">
                    <h1 className="text-center text-white">Resumen de la Producción Forestal</h1>
                </div>

            </div>

            <div className="row row-cards mb-5 justify-content-center">
                <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm bg-dark text-green">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="bg-green text-white avatar">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" 
                                        viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" 
                                        strokeLinecap="round" strokeLinejoin="round"><path stroke="none" 
                                        d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2">
                                          </path><path d="M12 3v3m0 12v3"></path></svg>
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="font-weight-bold text-green">
                                        Cantidad de Expedientes
                                    </div>
                                    <div className="text-white">
                                        122
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-3">
                    <div className="card card-sm bg-dark text-green">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <span className="bg-green text-white avatar">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" 
                                        height="24" viewBox="0 0 24 24" strokeWidth="2" 
                                        stroke="currentColor" fill="none" strokeLinecap="round" 
                                        strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" 
                                        fill="none"></path>
                                        <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2">
                                          </path><path d="M12 3v3m0 12v3"></path></svg>
                                    </span>
                                </div>
                                <div className="col">
                                    <div className="font-weight-bold text-green">
                                        Superficie Total Aprobada
                                    </div>
                                    <div className="text-white">
                                        6456546456 ha
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="row mt-6 justify-content-center p-0">

                <div className="col-lg-12">
                    <h2 className="h2 text-white">Producción Forestal por año (t)</h2>
                </div>

                <div className="col-lg-12">
                    <div className="card bg-transparent">

                        <div id='card-body-table-rodal-resumen' className="card-body d-flex justify-content-center" style={{ maxHeight: '600px', overflow: 'auto' }}>
                            <LineGr
                                  title={'Total de Producción Forestal por año'}
                                  data_graphic={dataGraphicBar} name_serie={'Producción (t)'} 
                                  number_data={Object.keys(dataGraphicBar).length}
                                  colors={colorsBar} labels={labelsBar}
                            ></LineGr>
                        </div>

                    </div>
                </div>

                <div className="col-lg-12 mt-5">
                        <div className="card bg-transparent">

                            <div id='card-body-table-rodal-resumen' className="card-body" style={{ maxHeight: '600px', overflow: 'auto' }}>
                                <TableProduccionByYears data_produccion={dataProduccionYears}></TableProduccionByYears>
                            </div>

                        </div>
                </div>

                <div className="hr text-white"></div>

                <div className="col-lg-12 mt-5">
                    <h2 className="h2 text-white">Producción por tipo de Material agrupado por año (t)</h2>
                </div>

                <div className="col-lg-12 ">
                    <div className="card bg-transparent">
                        <div id='card-body-table-rodal-resumen' className="card-body" style={{ maxHeight: '800px', width: '100%', overflow: 'auto' }}>

                            <TableProduccionByMaterialByYear data_produccion={dataMaterialProduccion}></TableProduccionByMaterialByYear>
                        
                        </div>

                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-lg-11 col-md-11">

                                <div className="card mt-7" style={{ backgroundColor: 'transparent' }}>
                                    <div className="card-body">
                                        <div id="chart-tasks-overview" style={{ height: '1000px' }} className='d-flex justify-content-center'>

                                          <MultiLine data_graphic={dataGraphicMultiLine} 
                                            title={'Producción por tipo de Material agrupado por año (t)'} 
                                            
                                          > </MultiLine>

                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>




                </div>



            </div>
        </div >
    </>
    )
}

export default ProduccionResumenEmpresa