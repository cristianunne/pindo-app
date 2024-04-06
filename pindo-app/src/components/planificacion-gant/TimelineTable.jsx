import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import '../../styles/tables/tables.css'


const TimelineTable = ({data_planificacion, years_data}) => {

    const [items, setItems] = useState([]);


    const createItems = () => {

        let item_ = [];

        data_planificacion.map((data, index) => {

            let tds_ = [];

            tds_.push(<td className='text-white'>{data.rodal[0].cod_sap}</td>)

            //recorro primero cada rodal
            years_data.forEach(year_d => {
                let is_present = false;
                let color = null;
                //comparo los years
                data.data.planificacion.forEach(plan_data => {
                    if(year_d.year == plan_data.year){

                        is_present = true;
                        color = plan_data.intervenciones_types__color
                      

                    } 
                });


                if(is_present){
                    tds_.push(<td style={{backgroundColor: color, opacity: 0.8}}></td>);
                } else {
                    tds_.push(<td></td>)
                }

            });

            item_.push(
                <tr id={index}>
                    {tds_}
                </tr>
            );

        });




        setItems(item_);

       


    }
   

    useEffect(() => {

        if(data_planificacion != null && years_data != null){
            createItems();
        }

    }, [data_planificacion, years_data])

    return (
        <Table bordered hover id='tabla-rodales-empresas' className='table-timeline'>
        <thead className="top-0 thead-border ">
            <tr>
                <th className="dt-center text-center" style={{maxWidth: '100px', overflowX: 'hidden'}}>Rodal</th>

                {years_data != null ? years_data.map((year, index) => {

                        return(
                            <th className="dt-center text-center">{year.year}</th>
                        )

                }) : null}
               
       
               
                
            </tr>

        </thead>

        <tbody>

        {items}

       
        </tbody>


    </Table>
    )
}

export default TimelineTable