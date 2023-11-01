import { useEffect } from 'react';



const WorkoutApplication = () => {
    useEffect(()=> {
        const WorkoutWindow = document.createElement('https://roaring-boba-8ef40e.netlify.app'); // change the new window to show the app render build
        document.getElementById('container').appendChild(WorkoutWindow);
    }, []);
  return (
    <div>
    <div>WorkoutApplication</div>
    <iframe
        src="https://roaring-boba-8ef40e.netlify.app"
        width="700"
        height="500"
        title="WorkoutApplication"

    ></iframe>

    <div id ="container"></div>
    </div>
  )
}

export default WorkoutApplication