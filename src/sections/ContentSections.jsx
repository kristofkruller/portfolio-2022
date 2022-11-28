import React from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import Services from './Services';

import { useStateContext } from '../components/StateContext'

const ContentSections = (props) => {

    const { landing, logoViewState } = useStateContext();

    return (
        <>  
            {landing ? 
            <section style={{backgroundColor: props => props.theme.dark}}>
            <Home data={props.data} />
            <Portfolio data={props.data} />            
            </section>
            : <></>}
        </>
    )
}

export default ContentSections