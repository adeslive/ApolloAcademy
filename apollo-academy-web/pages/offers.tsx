import React, { Fragment } from 'react';


interface OffersProps { }
const Offers : React.FC<OffersProps> = ({...props}) => {

    return(
        <Fragment>
            <h1 style={{background:'red'}}>OFERTAS</h1>
            
        </Fragment>
    );

}

export default Offers;