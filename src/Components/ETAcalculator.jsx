const ETAcalculator = () => {
  return (
    <div className="card text-center">
        <div className="card-header">
            <b>ETA Calculator</b>
        </div>
        <div className="card-body">
            <div className="input-group mb-3">
            <span className="input-group-text">Enter Start Location</span>
            <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
            </div>
            
            <div className="input-group mb-3">
            <span className="input-group-text">Enter Destination  </span>
            <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
            </div>
            <a href="#" className="btn btn-primary">Calculate ETA</a>
        </div>
        <div className="card-footer text-body-secondary">
            <b>Expectted ETA = ...</b>
        </div>
    </div>
  )
}

export default ETAcalculator