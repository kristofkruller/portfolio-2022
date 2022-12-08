import React from 'react';
import Home from './Home';
import Portfolio from './Portfolio';

import { useStateContext } from '../components/StateContext'
import Different from './Different';

const ContentSections = (props) => {

    const { landing } = useStateContext();

    return (
        <>  
            {landing ? 
                <section style={{backgroundColor: props => props.theme.dark}}>
                    <Home data={props.data} />
                    <Portfolio data={props.data} />   
                    <Different />   
                </section>
            : <></>}
        </>
    )
}

export default ContentSections