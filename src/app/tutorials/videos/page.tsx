import MuxPlayer from '@mux/mux-player-react/lazy'
import React from 'react'

type Props = {}

const VideoTutorialsPage = (props: Props) => {
  return (
    <main className="pt-[10vh] container">
      <h4 className="flex items-baseline">TUTORIAL<span>ABS</span></h4>
      <MuxPlayer
        loading="viewport"
        playbackId="iHS02I15NGryP00jyf8a1KS2q33J2O7kEjwfN9cJsHfy4"
        streamType="on-demand"
      />

    </main>
  )
}

export default VideoTutorialsPage