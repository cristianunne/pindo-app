import React, { useEffect, useState } from 'react'

const ItemSimpleResumen = ({ title, value, unidad, icon, unidad_position, is_parse, style_card }) => {

    const [style, setStyle] = useState();
    const [background, setBackground] = useState();

    const [val, setVal] = useState();






    useEffect(() => {
        if(is_parse){
         
            setVal(parseFloat(value).toFixed(2));
        } else {
            setVal(value)
         
        }

       

    })


    return (
        <div className="col-sm-6 col-lg-3">
            {style_card === undefined ?
                <div className="card card-sm bg-dark text-green">

                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <span className="bg-green text-white avatar">
                                    {icon}
                                </span>
                            </div>
                            <div className="col">
                                <div className="font-weight-bold text-green">
                                    {title}
                                </div>
                                <div className="text-white">
                                    {unidad_position == 1 ? <>{unidad + ' ' + parseFloat(value).toFixed(2)}</> :
                                        <> {parseFloat(value).toFixed(2) + ' ' + unidad}</>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : style_card === 1 ?

                <div className="card card-sm bg-dark text-yellow-fg">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <span className="bg-yellow text-white avatar">
                                    {icon}
                                </span>
                            </div>
                            <div className="col">
                                <div className="font-weight-bold text-yellow">
                                    {title}
                                </div>
                                <div className="text-white">
                                {unidad_position == 1 ? <> 
                                
                                {unidad + ' ' + val}</> :
                                        <> {val + ' ' + unidad}</>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null

            }
        </div>
    )

}
export default ItemSimpleResumen