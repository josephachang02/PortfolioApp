import './index.css'
import ReactMap from '../../components/ReactMap/reactmap'
import TabularMap from '../../components/ReactMap/tabs'

const gis = () => {
  return (
    <div>
      <h1>
       See where my Projects have taken me around the World 
      </h1>
      <TabularMap />
    </div>
  )
}

export default gis