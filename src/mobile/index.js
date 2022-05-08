import React from 'react';
import Portrait from '../utils/Portrait';
import TopBar from '../utils/TopBar';

import photo1 from '../utils/pictures/juliandi1.jpeg';
import photo2 from '../utils/pictures/juliandi2.jpeg';
import './Mobile.css';
import Confirmation from '../utils/Confirmation';

export default function MobileApp()
{
    return (
        <div style={{ left:0, position: 'absolute', width:'100%' }}>
            <TopBar/>
            <section>
                <Portrait src={photo1} />
            </section>
            <article>
                Insert Text Here
            </article>
            <section>
                <Portrait src={photo2} />
            </section>
            <article>
                Insert Text Here
            </article>
            <Confirmation/>
        </div>
    );
}