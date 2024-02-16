'use client'
import styles from '@/app/page.module.css'
import Carousel from '@/components/carousel/carousel'
import Speakersbox from '@/components/common/Speakersbox'
import Modal from '@/components/speakers/Modal'
import { Speaker } from '@/sanity/schemas/speaker'
import { useState } from 'react'

export default function SpeakerCarousel(props: { speakers: Speaker[] }) {
  const [showModal, setShowModal] = useState(false)
  const [currSpeaker, setCurrSpeaker] = useState<Speaker>()

  return (
    <div className={styles['section']}>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        currSpeaker={currSpeaker}
      />
      <Carousel>
        {props.speakers.map((speaker, idx) => (
          <Speakersbox
            key={idx}
            setCurrSpeaker={setCurrSpeaker}
            setShowModal={setShowModal}
            speaker={speaker}
            width=""
          />
        ))}
      </Carousel>
    </div>
  )
}
