import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RodalesIcon from '../../icons/RodalesIcon'

const ItemApps = ({ icon, title, description, url }) => {

    const navigate = useNavigate();

    const onClick = () => {

        navigate(url)

    }

    return (
        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                <div className="service-icon flex-shrink-0">
                    <i className="fa fa-2x">

                        {icon != null ?

                            <img src={icon} alt="alternatetext" width="80px" height="80px" /> : 
                            <RodalesIcon width={80} height={80}></RodalesIcon>
}

                    </i>

                </div>
                <h3 className="mb-3">{title}</h3>
                <p style={{ textAlign: 'justify' }}>{description}</p>
                <a className="btn px-3 mt-auto mx-auto" onClick={onClick}>Ir a...</a>
            </div>
        </div>
    )
}

export default ItemApps

