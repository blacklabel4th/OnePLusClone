import React from "react"
import Navbar from "./navbar"
import Card from "./card"
import Footer from "./Footer"


const App = ()=>{
    return(
        <div>
            <Navbar/>
            <Card 
                image = "gg2.jpg"
                name  = "OnePlus Nord N20 SE"
                skill = "You've Got The Power"
            />
            <Card 
                color = "white"
                image = "gg3.jpg"
                name  = "OnePlus 10T 5g"
                skill = "Evolve Beyond Speed"
            />
             <Card 
                color = "white"
                image = "gg4.jpg"
                name  = "OnePlus 10T 5g"
                skill = "Evolve Beyond Speed"
            />
             <Card 
                image = "gg5.jpg"
                name  = "OnePlus 10T 5g"
                skill = "Evolve Beyond Speed"
            />
             <Card 
                image = "gg6.jpg"
                name  = "OnePlus 10T 5g"
                skill = "Evolve Beyond Speed"
            />
            <Footer/>
        </div>
    )
}

export default App