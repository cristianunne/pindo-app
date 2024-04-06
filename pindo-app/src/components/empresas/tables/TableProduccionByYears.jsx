import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import '../../../styles/tables/tables.css'

const TableProduccionByYears = ({ data_produccion }) => {

    const [data, setData] = useState([]);


    useEffect(() => {

        if (data_produccion != null && data_produccion != undefined) {
            setData(data_produccion);
        }

    }, [data_produccion])


    return (
        <Table bordered hover id='tabla-rodales-empresas' className='table-pindo-black'>
            <thead className="top-0 thead-border ">
                <tr>
                    <th className="dt-center text-center">#</th>
                    {Object.keys(data).length > 0 ?
                        data.map((element, index) => {

                            return (
                                <th className="dt-center text-center">{element.year}</th>

                            )
                        }) : null

                    }
                </tr>


            </thead>

            <tbody>
                <tr>
                <td className='text-center'>Producción</td>
                    {Object.keys(data).length > 0 ?
                        data.map((element, index) => {

                            return (
                                <>
                                  
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
                   

                </tr>
            </tbody>


        </Table>
    )
}

export default TableProduccionByYears