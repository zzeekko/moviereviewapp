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
                showtimeDay={item.showtimes.day}
                showtimeTime={item.showtimes.time}
            />
        )
    })


    return (
        <main className="main" id="main">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {cardComponents}
                </div>
            </div>
        </main>
    )
}

export default Main