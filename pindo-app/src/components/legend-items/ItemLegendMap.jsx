import React from 'react'

const ItemLegendMap = ({ title, color }) => {
  return (
    <div className="col-sm-2 col-lg-2">
    <div className="card card-sm bg-dark text-yellow-fg">
        <div className="card-body">
            <div className="row align-items-center">
                <div className="col-auto">
                    <span className="text-white avatar" style={{backgroundColor: color}}>
                    </span>
                </div>
                <div className="col">
                    <div className="text-white">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}

export default ItemLegendMap