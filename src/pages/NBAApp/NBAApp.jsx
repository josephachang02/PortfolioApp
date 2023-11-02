import { useEffect } from 'react'
import './index.css' 



const NBAApplication = () => {
    // useEffect(()=> {
    //     const NBAWindow = document.createElement('https://roaring-boba-8ef40e.netlify.app/');
    //     document.getElementById('container').appendChild(NBAWindow);
    // }, []);
  return (
    <div>
<h1>NBA Application </h1>  
<br>
</br>
<h4>
  Here in my first React project, I was able to incorporate functional and dynamic features such as utilizing; Context, API, and useState to create a mimic of the NBA website. 
  </h4>  
<a href = "https://roaring-boba-8ef40e.netlify.app/" target="_blank" rel="noopener">Click to open the NBA app on a new Tab</a>
  <div id ="container">
    <iframe
        src="https://roaring-boba-8ef40e.netlify.app"
        width="1400"
        height="900"
        title="NBAApplication"
    ></iframe>

    </div>
    </div>
  )
}

export default NBAApplication