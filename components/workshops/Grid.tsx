'use client'

import styles from '@/app/speakers/page.module.css'
import { Workshop } from '@/sanity/schemas/workshop'
import { useState } from 'react'
import Workshopbox from '../common/Workshopbox'
import Modal from './Modal'

export default function WorkshopGrid(props: { workshops: Workshop[] }) {
  const [showModal, setShowModal] = useState(false)
  const [currWorkshop, setCurrWorkshop] = useState<Workshop>()

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        currWorkshop={currWorkshop}
      />
      <div className="outer-margin">
        <div className={styles['speakers-grid']}>
          {props.workshops.map((workshop, index) => (
            <div className={styles['workshop-card-wrapper']} key={index}>
              <Workshopbox
                setShowModal={setShowModal}
                setCurrWorkshop={setCurrWorkshop}
                workshop={workshop}
                width=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
