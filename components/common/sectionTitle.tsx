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
          <img src={props.image} className={styles['image']} />
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
