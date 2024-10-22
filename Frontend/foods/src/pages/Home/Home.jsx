import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import ExplorMenu from '../../components/ExplorMenu/ExplorMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

function Home() {
    const [category ,setCategory] = useState("All")

  return (
    <div>
        <Header/>
        <ExplorMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category ={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home
