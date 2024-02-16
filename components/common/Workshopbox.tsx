import { urlForImage } from '@/sanity/lib/image'
import { type Workshop } from '@/sanity/schemas/workshop'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import styles from './Workshopbox.module.css'

export default function Workshopbox({
  setShowModal,
  setCurrWorkshop,
  workshop,
}: {
  workshop: Workshop
  setShowModal: Dispatch<SetStateAction<boolean>>
  setCurrWorkshop: Dispatch<SetStateAction<Workshop>>
  width: string
}) {
  return (
    <div className={styles['workshop-box']}>
      <img
        src={urlForImage(workshop.image)}
        alt="Event poster"
        className={styles['poster']}
      />

      <div className={styles['content-box']}>
        <div className={styles['date-time']}>
          {/* Dynamic date and time */}
          <span className={styles['date']}>{workshop.date}</span>
          <div className={styles['dot']}></div>
          <span className={styles['time']}>{workshop.duration} hrs</span>
        </div>

        <h4 className={styles['title']}>{workshop.name}</h4>
        <p className={styles['description']}>{workshop.description}</p>

        <div className={styles['bottom-btns']}>
          <div className={styles['organizer']}>
            <Image
              src={urlForImage(workshop.conducted_by.logo)}
              width={28}
              height={28}
              alt="Logo of organizer"
              className={styles['organizer-logo']}
            />
            <span>{workshop.conducted_by.name}</span>
          </div>

          <button
            onClick={() => {
              setCurrWorkshop(workshop)
              setShowModal(true)
            }}
            className={styles['view-btn']}
          >
            <img src={'/arrow_right.svg'} alt="View more" />
          </button>
        </div>
      </div>
    </div>
  )
}
