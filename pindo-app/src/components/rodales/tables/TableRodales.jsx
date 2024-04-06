import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'


import '../../../styles/tables/tables.css'
import VerIcon from '../../../icons/VerIcon';
import { RodalesGlobalContext } from '../../../context/globalcontext';
import { SCREENS_RODALES } from '../../../utility/SCREENS';

const TableRodales = ({ data_rodales }) => {

    const { screen, setScreen,
        stateScreen, setStateScreen} = useContext(RodalesGlobalContext);

    const [data, setData] = useState([]);
    const navigate = useNavigate();


    const onClickEmpresa = (e) => {

        //e.currentTarget.title
        let id_empresa_attr = e.currentTarget.getAttribute('id_empresa');

        let id_empresa = id_empresa_attr != undefined ? id_empresa_attr : null;

        if (id_empresa) {

            //seteo el screen inicial


            navigate(`/empresas/${id_empresa}`)

        }


    }

    const onClickVer = (e) => {

        e.preventDefault();

        //obtengo el id del rodal

        //e.currentTarget.title
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
                    <th className="dt-center text-center">Rodal</th>
                    <th className="dt-center text-center">Campo</th>
                    <th className="dt-center text-center">¿Certificado?</th>
                    <th className="dt-center text-center">Uso</th>
                    <th className="dt-center text-center">Empresa</th>
                    <th className="dt-center text-center">Ver</th>
                </tr>
            </thead>

            <tbody>

                {
                    data.length > 0 ? data.map((rodal, index) => {

                        return (

                            <tr key={index}>
                                <td className='text-center align-middle'> {index + 1}</td>
                                <td className='text-center align-middle'>{rodal.cod_sap}</td>
                                <td className='text-center align-middle'>{rodal.campo}</td>
                                <td className='text-center align-middle'>{rodal.is_certificado ? 'Si' : 'No'}</td>
                                <td className='text-center align-middle text-lime'>{rodal.usos_rodales__name}</td>
                                <td className='text-center align-middle'>
                                    <a className='link-td' onClick={onClickEmpresa} id_empresa={rodal.empresa__sap_id}>
                                        {rodal.empresa__name} </a>
                                </td>
                                <td className='text-center align-middle'>

                                    <a href="" className="btn btn-outline-info" onClick={onClickVer} id_rodal={rodal.pk}>

                                        <VerIcon width={24} height={24}></VerIcon>
                                        Ver
                                    </a>


                                </td>
                            </tr>
                        )

                    })
                        : null

                }


            </tbody>


        </Table>
    )
}

export default TableRodales