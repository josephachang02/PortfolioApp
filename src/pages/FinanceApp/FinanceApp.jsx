// import { useEffect } from 'react';
import './index.css'


const FinanceApp = () => {
    // useEffect(()=> {
    //     const FinanceWindow = document.createElement('https://peppy-custard-ae0f17.netlify.app/');
    //     document.getElementById('container').appendChild(FinanceWindow);
    // }, []);
  return (
    <>
    <h1>
Personal Finance Calculator
    </h1>
<h4>
  In my very first project and introduction to a comprehensive Front-End website, I decided to create a Overarching website that calculates your financial health based on your fixed and personal spendings. Here I was able to utilize javascript to create responsive popups, store data/information carried into the following page, as well as populating feedback based on your input.
</h4>
<a href = "https://peppy-custard-ae0f17.netlify.app/">Click to open the Finance app on a new Tab</a>
    <div>Finance App</div>
    <div id ="container">
    <iframe 
        src="https://peppy-custard-ae0f17.netlify.app/"
        width="1000"
        height="1000"
        title="FinanceApp"

    ></iframe>

    </div>
    </>
  )
}

export default FinanceApp