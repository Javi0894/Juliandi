import Portrait from '../utils/Portrait';
import TopBar from '../utils/TopBar';

import photo1 from '../utils/pictures/juliandi1.jpeg';
import photo2 from '../utils/pictures/juliandi2.jpeg';
import LoginForm from '../utils/Login';

import './Desktop.css';

export default function DesktopApp()
{
    return(
        <>
            <TopBar/>
            <div className="App shadow">
                <section>
                <Portrait 
                    src={photo1} 
                    style={{ 
                    width: '40%', 
                    objectFit:'cover', 
                    borderRadius: 10, 
                    objectPosition: '0px 0px'
                    }}
                />
                <article>
                    Insert Text Here
                </article>
                </section>

                <section>
                <article>
                    Insert Text Here
                </article>
                <Portrait 
                    src={photo2} 
                    style={{ 
                    width: '40%', 
                    objectFit:'cover', 
                    borderRadius: 10, 
                    objectPosition: '0px 0px'
                    }}
                />
                </section>
                <LoginForm/>
            </div>
        </>
    );
}