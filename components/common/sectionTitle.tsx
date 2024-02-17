import Image from 'next/image'
import Link from 'next/link'
import styles from './sectionTitle.module.css'
export default function SectionTitle(props: {
  image: string
  title: string
  tag: string
  viewAllLink: string
  viewAllText: string
}) {
  return (
    <div className={styles['section-title']}>
      <Link href={'/speakers'}>
        <div className={styles['wrapper']}>
          <Image
            src={props.image}
            className={styles['image']}
            alt="section-image"
            width={100}
            height={100}
          />
          <div className={styles['text-wrapper']}>
            <span className={styles['tag']}>{props.tag}</span>
            <h1 className={styles['title']}>{props.title}</h1>
          </div>
        </div>
      </Link>
      <div className={styles['view-all-btn']}>
        <Link href={props.viewAllLink}>
          <button>{props.viewAllText}</button>
        </Link>
      </div>
    </div>
  )
}
