import './App.css'
import React from 'react'
import { useState } from 'react'
import sos_img from './assets/sos.png'
import map_img from './assets/map.png'
import eta_img from './assets/Navigation Pin.png'
import contact_img from './assets/user.png'
import OptionBtn from './Components/OptionBtn'
import LocationCard from './Components/LocationCard'
import ETAcalculator from './Components/ETAcalculator'


function App() {
  const [page,setPage]=useState("main");
  return (
    <>
      <header className='bg-slate-800 text-4xl text-white'>SIH 2024</header>
      {(page==="main")?(
        <main className='bg-slate-600 text-white'>
          <OptionBtn img={sos_img} color={"red"} txt={"SOS"} setBtn={setPage}></OptionBtn>
          <OptionBtn img={map_img} color={"blue"} txt={"Map"} setBtn={setPage}></OptionBtn>
          <OptionBtn img={eta_img} color={"yellow"} txt={"ETA Monitor"} setBtn={setPage}></OptionBtn>
          <OptionBtn img={contact_img} color={"green"} txt={"Contacts"} setBtn={setPage}></OptionBtn>
        </main>
      ):<LocationCard/>}
      <ETAcalculator></ETAcalculator>
      
    </>
  );
}

export default App;