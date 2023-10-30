import Lottie from 'lottie-react'
import React from 'react'
import loadingAnimation from '@/assets/loading-animation.json'

const Loading = () => {
  return (
    <Lottie animationData={loadingAnimation}/>
  )
}

export default Loading