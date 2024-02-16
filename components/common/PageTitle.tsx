import styles from './PageTitle.module.css'

export default function PageTitle({ imageSrc, title, tag }) {
  return (
    <div className={styles['page-title']}>
      <img src={imageSrc} className={styles['image']} />
      <div className={styles['text-wrapper']}>
        <span className={styles['tag']}>{tag}</span>
        <h1 className={styles['title']}>{title}</h1>
      </div>
    </div>
  )
}
