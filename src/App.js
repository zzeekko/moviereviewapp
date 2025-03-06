import { useState, useEffect } from 'react'

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from './components/Footer'
import Data from './Data'

const App =()=> {
    const [myData, setMyData] = useState([])

    useEffect(()=> {
        setMyData(Data)
    }, [])
    // I used useState and useEffect so that if the data changes over time, like when new movies come out or something, myData will be able to update and render them without issue
    return (
        <>
            <Header />
            <Main data={myData} />
            <Footer />
        </>
    )
}

export default App