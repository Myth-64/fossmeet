import Navbar from '@/components/common/Navbar'
import PageTitle from '@/components/common/PageTitle'
import Footer from '@/components/footer/Footer'
import styles from './page.module.css'

export default async function Page() {
  return (
    <>
      <Navbar />
      <PageTitle imageSrc={'./star.png'} title="Sponsors" tag="Event" />
      <main className="outer-margin">
        <div className="inner-margin">
          <div className={styles['sponsors-grid']}>
            <Sponsor
              imgSrc={'/nilenso.svg'}
              dotColor="#FF3D84"
              name="Nilenso"
              tier="🥇 GOLD TIER"
              link="https://nilenso.com/"
            />
            <Sponsor
              imgSrc={'/foss_united.svg'}
              dotColor="#0F9C47"
              name="FOSS United"
              tier="🥈 SILVER TIER"
              link="https://fossunited.org/"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

function Sponsor({ link, imgSrc, dotColor, name, tier }) {
  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      <div className={styles['sponsor']}>
        <div className={styles['logo-container']}>
          <img
            src={imgSrc}
            alt="company-logo"
            className={styles['company-logo']}
            // width={100}
            // height={100}
          />
        </div>
        <div className={styles['sponsor-bottom']}>
          <div className=" flex items-center gap-[8px]">
            <div
              className={styles['circle']}
              style={{ backgroundColor: dotColor }}
            ></div>
            <span className={styles['company-name']}>{name}</span>
          </div>
          <div className={styles['tier']}>{tier}</div>
        </div>
      </div>
    </a>
  )
}
