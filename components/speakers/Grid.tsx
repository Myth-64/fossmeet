'use client'
import styles from '@/app/speakers/page.module.css'

import Speakersbox from '@/components/common/Speakersbox'
import Modal from '@/components/speakers/Modal'
import { Speaker } from '@/sanity/schemas/speaker'
import { useState } from 'react'

export default function SpeakersGrid(props: { speakers: Speaker[] }) {
  const [showModal, setShowModal] = useState(false)
  const [currSpeaker, setCurrSpeaker] = useState<Speaker>()

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        currSpeaker={currSpeaker}
      />

      <div className="outer-margin">
        <div className={styles['speakers-grid']}>
          {props.speakers.map((speaker, index) => (
            <Speakersbox
              key={index}
              setShowModal={setShowModal}
              setCurrSpeaker={setCurrSpeaker}
              speaker={speaker}
              width=""
            />
          ))}
        </div>
      </div>
    </>
  )
}
