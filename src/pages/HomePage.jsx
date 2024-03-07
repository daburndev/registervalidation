import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Registration from '../components/Registration'
import UserComponent from '../components/UserComponent'

function HomePage() {
    const myArr = ["first","second","third"]
    const [disable, setDisable] = useState(false)

    const handleClick = () => {
        setDisable(!disable)
    }

  return (
    <>
        <Navbar/>
        <Registration/>
        {/* <UserComponent/> */}

       
    </>
  )
}

export default HomePage