import React from 'react'
import { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'

function IntroPost() {

  useEffect(()=>{
    getPost();
  },[])

  const getPost=()=> {
    GlobalApi.getPost.then(resp=>{
      console.log(resp)
    })
  }
  return (
    <div>Intropost</div>
  )
}

export default IntroPost