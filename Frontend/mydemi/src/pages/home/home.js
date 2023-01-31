import React, {useContext, useEffect} from 'react'
import Navbar from '../../components/navbar/navbar'
import AuthContext from '../../services/AuthContext'
import Cookies from 'universal-cookie';
import Headbanner from '../../components/Home/HeadBanner/Headbanner'
import Header from "../../components/Home/components/Header";
import HomeContent from "../../components/Home/components/HomeContent";
import HomeFooter from "../../components/Home/components/HomeFooter";



function Home() {
  const {permission} = useContext(AuthContext)
  console.log(permission)


  
  return (
    <div>

    <Header/>
    <HomeContent/>
    <HomeFooter/>
    </div>
  )
}

export default Home