import './index.css'
import ReactMap from '../../components/ReactMap/reactmap'
import TabularMap from '../../components/ReactMap/tabs'
import { useState , useEffect } from 'react'

const gis = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`GIS-section${shrink ? 'shrink' : ''}`}>
    <div>
      <h1>
       See where my Projects have taken me around the World 
      </h1>
      <TabularMap />
    </div>
    </div>
  )
}

export default gis