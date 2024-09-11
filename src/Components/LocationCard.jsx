import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../assets/rcc.jpeg'
import tick from '../assets/tick.png'
const LocationCard = () => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">RCC Institue of Information Technology</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex align-items-center">Street Light<img style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem' }} src={tick}></img></li>
        <li className="list-group-item d-flex align-items-center">CCTV<img style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem' }} src={tick}></img></li>
        
        <li className="list-group-item d-flex">Nearest Police Station: Beleaghata Police Station 750m</li>
        <li className="list-group-item d-flex">Average Foot Fall: 100/min</li>
        <li className="list-group-item d-flex">Nearby Registred Users: 200</li>
      </ul>
    </div>
  )
}

export default LocationCard;