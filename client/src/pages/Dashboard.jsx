import React, { useEffect, useState } from 'react'
import { dummyCreationData } from '../assets/assets'

const Dashboard = () => {
  const [creations,setCreations] =useState([])
  const getDashboardData=async()=>{
    setCreations(dummyCreationData)

  }
  useEffect(()=>{
    getDashboardData()
  },[])


  return (
    <div>
      
    </div>
  )
}

export default Dashboard
