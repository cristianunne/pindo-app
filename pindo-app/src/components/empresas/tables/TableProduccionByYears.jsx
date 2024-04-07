import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import '../../../styles/tables/tables.css'

const TableProduccionByYears = ({ data_produccion }) => {

    const [data, setData] = useState([]);

    const [items, setItems] = useState([]);


    const createItems = (data_produccion) => {

        if (data_produccion.length > 0) {

            let item_ = [];
            data.map((element, index) => {

                if (!isNaN(parseFloat(element.produccion))) {

                    item_.push(<td key={'td_' + index} id={'td_pr' + index + element.year} className='text-center text-green'>
                        {parseFloat(element.produccion).toFixed(2)}
                    </td>);

                } else {

                    item_.push(<td key={'td_' + index} id={'td_pr' + index + element.year} className='text-center text-secondary'>
                        {'Sin Datos'}
                    </td>);

                }

            });

            setItems(item_);

        }

    }


    useEffect(() => {

        if (data_produccion != null && data_produccion != undefined) {
            setData(data_produccion);
            createItems(data_produccion);
        }
      

    }, [data_produccion])


    return (
        <Table bordered hover id='tabla-rodales-empresas' className='table-pindo-black'>
            <thead className="top-0 thead-border ">
                <tr key={'tr-header'}>
                    <th key={'th_h_title'} className="dt-center text-center">#</th>
                    {Object.keys(data).length > 0 ?
                        data.map((element, index) => {

                            return (
                                <th key={'th' + element.year + index} id={'th' + element.year + index} className="dt-center text-center">{element.year}</th>

                            )
                        }) : null

                    }
                </tr>


            </thead>

            <tbody>
                <tr key={'tr_hred'}>
                    <td key={'td_title_prof'} className='text-center'>Producción</td>
                   
                   {items}


                </tr>
            </tbody>


        </Table>
    )
}

export default TableProduccionByYears