import { useEffect } from 'react';



const NBAApplication = () => {
    useEffect(()=> {
        const NBAWindow = document.createElement('https://roaring-boba-8ef40e.netlify.app/');
        document.getElementById('container').appendChild(NBAWindow);
    }, []);
  return (
    <div>
    <div>NBA App</div>
    <iframe
        src="https://roaring-boba-8ef40e.netlify.app"
        width="700"
        height="500"
        title="NBAApplication"

    ></iframe>

    <div id ="container"></div>
    </div>
  )
}

export default NBAApplication