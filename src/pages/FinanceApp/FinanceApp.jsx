import { useEffect } from 'react';
import './index.css'


const FinanceApp = () => {
    // useEffect(()=> {
    //     const FinanceWindow = document.createElement('https://peppy-custard-ae0f17.netlify.app/');
    //     document.getElementById('container').appendChild(FinanceWindow);
    // }, []);
  return (
    <div>
    <div>Finance App</div>
    <div id ="container">
    <iframe 
        src="https://peppy-custard-ae0f17.netlify.app/"
        width="1000"
        height="1000"
        title="FinanceApp"

    ></iframe>
    </div>
    </div>
  )
}

export default FinanceApp