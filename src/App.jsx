import React from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import RowPost from "./components/RowPost"
import { API_KEY, baseURl } from "./constants/constant"
function App() {
  

  return (
    <>
     <Navbar 
          url={`trending/all/week?api_key=${API_KEY}&language=en-US`}/>
     <Banner/>
     <RowPost
          title="Netflix Originals"
          url={`discover/tv?api_key=${API_KEY}&with_networks=213`}
           />
     <RowPost
          title="Trending"
          url={`trending/all/week?api_key=${API_KEY}&language=en-US`}

     />
     <RowPost
          title="Action"
          url={`discover/movie?api_key=${API_KEY}&with_genres=28`}

     />
     <RowPost
          title="Comedy Movies"
          url={`discover/movie?api_key=${API_KEY}&with_genres=35`}

     />
     <RowPost
          title="Horror Movies"
          url={`discover/movie?api_key=${API_KEY}&with_genres=27`}

     />
     <RowPost
          title="Romance Movies"
          url={`discover/movie?api_key=${API_KEY}&with_genres=10749`}

     />
     <RowPost
          title="Documentaries"
          url={`discover/movie?api_key=${API_KEY}&with_genres=99`}

     />
     
        
    </>
  )
}

export default App
