import React, {useContext, useEffect} from 'react'
import Navbar from '../../components/navbar/navbar'
import AuthContext from '../../services/AuthContext'
import Cookies from 'universal-cookie';
import Headbanner from '../../components/Home/HeadBanner/Headbanner'


function Home() {
  const {permission} = useContext(AuthContext)
  console.log(permission)


  
  return (
    <div>

    <Navbar/>
    <Headbanner/>
    </div>
  )
}

export default Home