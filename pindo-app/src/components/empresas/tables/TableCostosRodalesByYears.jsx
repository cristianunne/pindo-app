import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import '../../../styles/tables/tables.css'



const TableCostosRodalesByYears = ({ data_costos }) => {

    const [data, setData] = useState([]);
    const [items, setItems] = useState([]);


    useEffect(() => {

    }, [data_costos]);


    const createItems = async () => {

        if (data_costos != null) {

            let td_items = [];

            data_costos[0].rodales.forEach((rodal, ind) => {

                td_items.push(<td className='text-center text-white fw-bold'>{rodal.rodal}</td>);

                data_costos[0].years.forEach((element, index) => {

                    //recorro el costo
                    let present = false;

                    data_costos[0].costos.forEach((costo, in_costo) => {

                        if (costo.rodal == rodal.rodal && costo.year == element.year) {

                            present = true;

                            td_items.push(<td className='text-center text-green'>
                                {parseFloat(costo.suma_imputado).toFixed(2)}
                            </td>);


                        }


                    });

                    if (!present) {

                        td_items.push(<td className='text-center text-secondary'>
                            {'Sin Datos'}
                        </td>);

                    }


                });


            });


            setItems(<tr> {td_items} </tr>);



            //recorro los years primero
            /*data_costos[0].years.forEach((element, index) => {

                //recorro los rodales
                data_costos[0].rodales.forEach((rodal, ind) => {

                   let is_rod_year_present = false;
                    //recorro los costos
                    data_costos[0].costos.forEach((costo, in_costo) => {

                        if(rodal.rodal == costo.rodal){

                         
                            //encontre el rodal, ahora verifico el year
                            if(costo.year == element.year){
                                is_rod_year_present = true;


                            }


                        }


                    });

                });

            });*/



        }
    }


    useEffect(() => {

        if (data_costos != null && data_costos != undefined) {
            setData(data_costos);
            createItems();
        }

    }, [data_costos])


    return (
        <Table bordered hover id='tabla-rodales-empresas' className='table-pindo-black'>
            <thead className="top-0 thead-border ">
                <tr>
                    <th className="dt-center text-center">#</th>
                    {Object.keys(data).length > 0 ?
                        data[0].years.map((element, index) => {

                            return (
                                <th className="dt-center text-center">{element.year}</th>

                            )
                        }) : null

                    }
                </tr>


            </thead>

            <tbody>
                {items}

            </tbody>


        </Table>
    )
}

export default TableCostosRodalesByYears