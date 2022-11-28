import React from 'react';

import Services from './Services';

import { useStateContext } from '../components/StateContext'

const NonSmooth = (props) => {

    const { logoViewState } = useStateContext();

    return (
        <section style={{backgroundColor: props => props.theme.dark}}>  
            {logoViewState ? <Services data={props.data} /> : <></>}
        </section>
    )
}

export default NonSmooth