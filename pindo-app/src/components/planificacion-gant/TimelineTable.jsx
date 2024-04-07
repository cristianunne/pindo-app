import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

import { Tooltip } from 'react-tooltip'

import '../../styles/tables/tables.css'
import 'react-tooltip/dist/react-tooltip.css'


const TimelineTable = ({data_planificacion, years_data}) => {

    const [items, setItems] = useState([]);

    const [state, setState] = useState(false);



    const createItems = () => {

        let item_ = [];

        data_planificacion.map((data, index) => {

            let tds_ = [];

            tds_.push(<td className='text-white' key={data.rodal[0].cod_sap + '_' + index}>{data.rodal[0].cod_sap}</td>)

            //recorro primero cada rodal
            years_data.forEach((year_d, y_ind)  => {
                let is_present = false;
                let color = null;
                let opacity = null;
             
                //comparo los years
                data.data.planificacion.forEach(plan_data => {
                    if(year_d.year == plan_data.year){

                        is_present = true;
                        color = plan_data.intervenciones_types__color;

                        if(plan_data.status){
                            opacity = 0.5;
                        } else {
                            opacity = 1
                        }

                    } 
                });

               
                if(is_present){
                    tds_.push(<td key={data.rodal[0].cod_sap + '_' + year_d.year + '_' + index + '_' + y_ind} 
                    style={{backgroundColor: '#ffffff', opacity: 1, height: 0, padding: 0}}>
                        <div style={{backgroundColor: color, opacity: opacity, width: '100%', height: '100%'}}>
                         
                        </div>
                    </td>);
                } else {
                    tds_.push(<td key={data.rodal[0].cod_sap + '_' + year_d.year + '_' + index + '_' + y_ind}></td>)
                }

            });

         

            item_.push(
                <tr key={'tr_' + data.rodal[0].cod_sap + '_'  + index}>
                    {tds_}
                </tr>
            );

        });



        setItems(item_);
        setState(true);
    

    }
   

    useEffect(() => {

        if(data_planificacion != null && years_data != null){

            if(!state){

                createItems();

            }
          
        }

    }, [data_planificacion, years_data, state])

    return (
        <Table bordered hover id='tabla-rodales-empresas' className='table-timeline'>
        <thead className="top-0 thead-border ">
            <tr key={'t-1'}>
                <th key={'th1'} className="dt-center text-center" style={{maxWidth: '100px', overflowX: 'hidden'}}>Rodal</th>

                {years_data != null ? years_data.map((year, index) => {

                        return(
                            <th className="dt-center text-center" key={index}>{year.year}</th>
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