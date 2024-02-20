import { Sponsor } from '@/app/sponsors/page';
import SectionTitle from '@/components/common/sectionTitle';
import styles from './Sponsors.module.css';

export default function sponsors() {
	return (
		<div className='outer-margin'>
			<div className='inner-margin'>
				<SectionTitle
					title='Sponsors'
					tag='Event'
					image='/star.png'
				/>
				<div className={styles['sponsors-grid']}>
					<Sponsor
						imgSrc={'/nilenso.svg'}
						dotColor='#FF3D84'
						name='Nilenso'
						tier='🥇 GOLD TIER'
						link='https://nilenso.com/'
					/>
					<Sponsor
						imgSrc={'/foss_united.svg'}
						dotColor='#0F9C47'
						name='FOSS United'
						tier='🥈 SILVER TIER'
						link='https://fossunited.org/'
					/>
				</div>
			</div>
		</div>
	)
}
