import React from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import Services from './Services';

import { useStateContext } from '../components/StateContext'

const ContentSections = (props) => {

    const { landing } = useStateContext();

    return (
        <>  
            {landing ? 
            <>
            <Home data={props.data} />
            <Services data={props.data} />
            <Portfolio data={props.data} />
            </>
            : <></>}
        </>
    )
}

export default ContentSections