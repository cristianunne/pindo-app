import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import '../../../styles/tables/tables.css'

const TableSagpyasEmpresas = ({ data_sagpyas }) => {

    const [data, setData] = useState([]);

    useEffect(() => {

        if (data_sagpyas != null && data_sagpyas != undefined) {
            setData(data_sagpyas);
        }

    }, [data_sagpyas])


    return (
        <Table bordered hover id='tabla-rodales-empresas' className='table-pindo-black'>
        <thead className="top-0 thead-border ">
            <tr>
                <th className="dt-center text-center">#</th>
                <th className="dt-center text-center">Expediente</th>
                <th className="dt-center text-center">Operaciones</th>
                <th className="dt-center text-center">Fecha</th>
                <th className="dt-center text-center">Turno Mínimo</th>
                <th className="dt-center text-center">Cant. Rodales</th>
                <th className="dt-center text-center">Superficie Aprobada (ha)</th>
                
            </tr>

        </thead>

        <tbody>

        {Object.keys(data).length > 0 ?
                    data.map((element, index) => {

                        return (
                            <tr key={index}>
                                <td className='text-center'> {index + 1}</td>
                                <td className='text-center'>{element.expediente}</td>
                                <td className='text-center'>{element.operaciones}</td>
                                <td className='text-center'>{element.fecha}</td>
                                <td className='text-center'>{element.turno_minimo + ' año/s'}</td>
                                <td className='text-center text-lime'>{element.cantidad_rodales}</td>

        
                               
                                {!isNaN(parseFloat(element.sup_aprobada)) ? 
                                <td className='text-center text-green'>
                                    {parseFloat(element.sup_aprobada).toFixed(2) }
                                    </td> :  
                                    <td className='text-center text-secondary'>
                                    {'Sin Datos'}
                                    </td>  }
                            </tr>

                        )
                    }) : null

                }

        </tbody>


    </Table>
    )
}

export default TableSagpyasEmpresas