'use client'
import Hls from 'hls.js';
import 'plyr/dist/plyr.css';
import { useEffect, useRef } from 'react';

export default function VideoPlayer() {
  // change this to streamId = process.env.LIVE_STREAM_KEY ( this is for test purposes only )
  const streamId = 'live';
  const src =
    'https://live.fosscell.org/hls/' + streamId + '.m3u8'
  const videoRef = useRef(null)

  async function loadVideo() {
    const video = videoRef.current
    if (!video) return
    const Plyr = await (await import('plyr')).default
    video.controls = true
    const defaultOptions = {}
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // This will run in safari, where HLS is supported natively
      video.src = src
    } else if (Hls.isSupported()) {
      // This will run in all other modern browsers

      const hls = new Hls()
      hls.loadSource(src)
      const player = new Plyr(video, defaultOptions)
      hls.attachMedia(video)
    } else {
      console.error(
        'This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API'
      )
    }
  }

  useEffect(() => {
    loadVideo()
  }, [src, videoRef])

  return (
    <>
      <video data-displaymaxtap ref={videoRef} />
      <style jsx>{`
        video {
          max-width: 80%;
        }
      `}</style>
    </>
  )
}
