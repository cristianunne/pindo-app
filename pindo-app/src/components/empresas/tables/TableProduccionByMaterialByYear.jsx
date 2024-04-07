import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import '../../../styles/tables/tables.css'

const TableProduccionByMaterialByYear = ({ data_produccion }) => {


    const [data, setData] = useState([]);
    const [dataYears, setDataYears] = useState([]);



    const [items, setItems] = useState([]);



    useEffect(() => {

        if (data_produccion != null) {

            setData(data_produccion);
            let item_tr = [];
            data_produccion.data.map((value, index) => {

                let item_ = [];

                Object.entries(value.data).forEach(([key, val]) => {

                    item_.push(

                        val > 0 ? <td key={'td' + key + value.txtmaterial} className='text-center text-green'>{val}</td> :  
                        <td key={'td' + key + value.txtmaterial} className='text-center'>{val}</td>

                       );

                });

                item_tr.push(
                    <tr key={value.txtmaterial + 'tr'}>
                        <td key={value.txtmaterial} className='text-white'>{value.txtmaterial}</td>
                        {item_}
                    </tr>
                );


                setItems(item_tr);
            });




        }
     


    }, [data_produccion])


    /*

     {Object.keys(data.years).length > 0 ?
                        data.years.map((element, index) => {

                            return (
                                <>
                                      <td className='text-center'>{element.txtmaterial}</td>
                                    {!isNaN(parseFloat(element.produccion)) ?
                                        <td className='text-center text-green'>
                                            {parseFloat(element.produccion).toFixed(2)}
                                        </td> :
                                        <td className='text-center text-secondary'>
                                            {'Sin Datos'}
                                        </td>}
                                </>


                            )
                        }) : null

                    }


                                {
                                    element.data.map((year_, index_ => {


                                        return (
                                            <>{!isNaN(parseFloat(year_)) ?
                                                <td className='text-center text-green'>
                                                    {parseFloat(year_).toFixed(2)}
                                                </td> :
                                                <td className='text-center text-secondary'>
                                                    {'Sin Datos'}
                                                </td>}
                                            </>
                                        );

                                    }))
                                }

    */

    return (
        <Table bordered hover id='tabla-rodales-empresas' className='table-pindo-black'>
            <thead className="top-0 thead-border ">
                <tr key={'tr_prodyear'}>
                    <th key={'th_title'} className="dt-center text-center">Material/Año</th>

                    {data.years != null ?
                        data.years.map((element, index) => {

                            return (
                                <th key={'th_' + element.year} className="dt-center text-center">{element.year}</th>

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

export default TableProduccionByMaterialByYear