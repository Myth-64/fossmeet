'use client'
import { Workshop } from '@/sanity/schemas/workshop'
import { useState } from 'react'
import Carousel from '../carousel/carousel'
import Workshopbox from '../common/Workshopbox'
import SectionTitle from '../common/sectionTitle'
import styles from '../speakers/section.module.css'
import Modal from './Modal'

export default function WorkshopSection(props: { workshops: Workshop[] }) {
  const [showModal, setShowModal] = useState(false)
  const [currWorkshop, setCurrWorkshop] = useState<Workshop>()

  return (
    <div className={styles['section']}>
      <SectionTitle
        title="Workshops"
        tag="Educational"
        image="/pen.png"
        viewAllLink="/workshops"
        viewAllText="View all workshops"
      />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        currWorkshop={currWorkshop}
      />
      <Carousel>
        {props.workshops.map((speaker, idx) => (
          <Workshopbox
            key={idx}
            setCurrWorkshop={setCurrWorkshop}
            setShowModal={setShowModal}
            workshop={speaker}
            width=""
          />
        ))}
      </Carousel>
    </div>
  )
}
