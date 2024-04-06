import React, { useEffect, useState } from 'react'

const TableResumenUsoSuperficie = ({ data_usos }) => {


    const [data, setData] = useState([]);


    useEffect(() => {

        if(data_usos != null && data_usos != undefined){
            setData(data_usos);
        }

    }, [data_usos])


    return (
        <table className="table table-pindo-black">
            <thead>
                <tr>
                    <th>Uso</th>
                    <th className='text-center'>Superficie</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(data).length > 0 ?
                    data.map((element, index) => {

                        return (
                            <tr key={index}>
                                <td>{element.uso}</td>
                                <td className='text-center'>{parseFloat(element.suma_superficie)}</td>

                            </tr>

                        )
                    }) : null
                
            }




            </tbody>
        </table>
    )
}

export default TableResumenUsoSuperficie