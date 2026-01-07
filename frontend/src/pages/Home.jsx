import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/specialityMenu'
import TopPhotographers from '../components/TopPhotographers'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <TopPhotographers/>
        <Banner/>
    </div>
  )
}

export default Home