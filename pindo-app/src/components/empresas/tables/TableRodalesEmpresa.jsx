import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'

import '../../../styles/tables/tables.css'

const TableRodalesEmpresa = ({ data_rodales, has_sagpya }) => {


    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const goToTodalClick = (e) => {

        let id_rodal_attr = e.currentTarget.getAttribute('id_rodal');

        let id_rodal = id_rodal_attr != undefined ? id_rodal_attr : null;

        let rodal = __getRodal(id_rodal);

        console.log(rodal);

        if (id_rodal) {
            navigate(`/rodales/${id_rodal}`, {
                state: rodal
            })
        }
    }

    const __getRodal = (id_rodal) => {

        let rodal = null;
        data.forEach(element => {

            if(element.pk == id_rodal){
                rodal = element;
                return;
            }
        })

        return rodal;

    }


    useEffect(() => {

        if (data_rodales != null && data_rodales != undefined) {
            setData(data_rodales);
        }

    }, [data_rodales])

    return (
        <Table bordered hover id='tabla-rodales-empresas' className='table-pindo-black'>
            <thead className="top-0 thead-border ">
                <tr>
                    <th className="dt-center text-center">#</th>
                    {has_sagpya ?  <th className="dt-center text-center">Sagpya</th> : null }

                    <th className="dt-center text-center">Rodal</th>

                    <th className="dt-center text-center">Campo</th>
                    <th className="dt-center text-center">¿Certificado?</th>
                    <th className="dt-center text-center">Uso</th>
                    <th className="dt-center text-center">Sup. Plantada (ha)</th>
                    <th className="dt-center text-center">Sup. Total (ha)</th>
                </tr>
            </thead>

            <tbody>

                {Object.keys(data).length > 0 ?
                    data.map((element, index) => {

                        return (
                            <tr key={index}>
                                <td className='text-center'> {index + 1}</td>
                                {has_sagpya ?  <td className='text-center'>{element.expediente}</td> : null }
                             

                                <td className='text-center align-middle'>
                                    <a className='link-td' onClick={goToTodalClick} id_rodal={element.pk}>
                                        {element.cod_sap} </a>
                                </td>

                                <td className='text-center'>{element.campo}</td>
                                <td className='text-center'>{element.is_certificado ? 'Si' : 'No'}</td>
                                <td className='text-center text-lime'>{element.usos_rodales__name}</td>
                                <td className='text-center text-green'>{parseFloat(element.suma_superficie)}</td>
                                {!isNaN(parseFloat(element.rodal_superficie)) ? 
                                <td className='text-center text-green' style={{fontWeight: 'bold'}}>
                                    {parseFloat(element.rodal_superficie).toFixed(2) }
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

export default TableRodalesEmpresa