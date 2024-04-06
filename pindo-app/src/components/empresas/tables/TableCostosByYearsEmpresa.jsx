import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import '../../../styles/tables/tables.css'


const TableCostosByYearsEmpresa = ({ data_costos }) => {


    const [data, setData] = useState([]);


    useEffect(() => {

        if (data_costos != null && data_costos != undefined) {
            setData(data_costos);
        }

    }, [data_costos])



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

                    <td className='text-center text-white fw-bold'>Imputado</td>
                    {Object.keys(data).length > 0 ?
                        data.map((element, index) => {

                            return (
                                <>

                                    {!isNaN(parseFloat(element.suma_imputado)) ?
                                        <td className='text-center text-green'>
                                            {parseFloat(element.suma_imputado).toFixed(2)}
                                        </td> :
                                        <td className='text-center text-secondary'>
                                            {'Sin Datos'}
                                        </td>}
                                </>


                            )
                        }) : null

                    }


                </tr>

                <tr>

                    <td className='text-center text-white fw-bold'>Unidades</td>
                    {Object.keys(data).length > 0 ?
                        data.map((element, index) => {

                            return (
                                <>

                                    {!isNaN(parseFloat(element.suma_unidades)) ?
                                        <td className='text-center text-green'>
                                            {parseFloat(element.suma_unidades).toFixed(2)}
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

export default TableCostosByYearsEmpresa