import Data from "../Data"

const Card =(Data)=> {



    return (
        <div className="col">
            <div className="card film-card h-100 bg-secondary text-white" id={Data.id}>
                <div className="card-header h-100">
                    <h2 className="card-heading display-3 text-center">{Data.title}</h2>
                </div>
                <img src={Data.cover} alt={Data.title} className="img-fluid card-img-top rounded" />
                <div className="card-body">
                    {/* Here I wanted the Day to always appear on the left side of the card and the Time to always appear on the right side of the card. It ended up looking strange no matter how I did it, so I ditched the UL and made cols within a row instead.
                    <ul className="list-unstyled">
                        <li className="list-inline-item md-4">Day: {props.showtime1Day}</li>
                        <li className="list-inline-item md-4 text-end">Time: {props.showtime1Time}</li>
                        <li className="list-inline-item md-4">Day: {props.showtime2Day}</li>
                        <li className="list-inline-item offset-4">Time: {props.showtime2Time}</li>
                    </ul> */}
                    <div className="row">
                        <div className="col-6">
                            <p className="card-text">Day: {Data.showtime1Day}</p>
                            <p className="card-text">Day: {Data.showtime2Day}</p>
                        </div>
                        <div className="col-6 text-end">
                            <p className="card-text">Time: {Data.showtime1Time}</p>
                            <p className="card-text">Time: {Data.showtime2Time}</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <button className="btn btn-light text-dark">Buy Ticket</button> 
                </div>
            </div>
        </div>
    )
}

export default Card