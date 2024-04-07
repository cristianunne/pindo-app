import React, { useEffect, useState } from 'react'
import { getPlanificacionLegendAPI } from '../../utility/querys';
import ItemLegend from './ItemLegend';

const LegendTimeline = () => {


    const [dataLegend, setDataLegend] = useState(null);
    const [state, setState] = useState();

    const getDataLegend = async () => {

        let data_legend = await getPlanificacionLegendAPI();

        if (data_legend) {

            setDataLegend(data_legend);
            setState(true);

        }

    }


    useEffect(() => {

        if (!state) {
            getDataLegend();
        }

    

    }, [state]);


    return (
        <>

        {dataLegend != null ? dataLegend.map((item, index) => {

            return <ItemLegend title={item.name} color={item.color} key={index}></ItemLegend>

        }) : null}

        </>

    )
}

export default LegendTimeline