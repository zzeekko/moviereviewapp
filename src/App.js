import {useState, useEffect} from 'react'

import Header from "./components/Header"
import Main from "./components/Main"
import Data from './Data'

const App =()=> {
    const [myData, setMyData] = useState([])

    useEffect(()=> {
        setMyData(Data)
    }, [])

    return (
        <>
            <Header />
            <Main data={myData} />
        </>
    )
}

export default App