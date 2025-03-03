const Card =(props)=> {



    return (
        <div className="col">
            <div className="card film-card h-100" id={props.key}>
                <div className="card-header">
                    <h2 className="card-heading display-3">{props.title}</h2>
                </div>
                <img src={props.cover} alt={props.title} className="img-fluid image card-img-top rounded" />
                <div className="card-body">
                    <p className="card-text">{props.showtime.day}</p>
                    <p className="card-text">{props.showtime.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Card