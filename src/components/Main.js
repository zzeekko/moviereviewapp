import {useId} from "react"

import Card from "./Card"

const Main =(props)=> {

    const cardComponents = props.data.map(item => {

        const id = useId()

        return (
            <Card 
                key={id}
                title={item.title}
                cover={item.cover}
                showtime1Day={item.showtime1Day}
                showtime1Time={item.showtime1Time}
                showtime2Day={item.showtime2Day}
                showtime2Time={item.showtime2Time}
            />
        )
    })


    return (
        <main className="main bg-dark text-white">
            <figure className="container text-center pb-4">
                <img className="figure-img img-fluid mx-auto rounded" src="./images/cinema.png" alt="a panel from Gachiakuta by Kei Urana featuring a character throwing his hands up in reference to the 'absolute cinema' meme"/>
                {/* font-italic didn't work on anything on this page for some reason, so I used the <em> element that I found in the bootstrap official docs even though I've never used it before. */}
                <figcaption className="figure-caption text-light text-uppercase"><em>absolute cinema</em></figcaption>
            </figure>
            <div className="container pb-5">
                <h3 className="text-center display-6 text-capitalize">showings near you:</h3>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {cardComponents}
                </div>
            </div>
        </main>
    )
}

export default Main