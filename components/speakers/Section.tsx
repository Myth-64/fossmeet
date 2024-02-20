'use client'
import Carousel from '@/components/carousel/carousel'
import Speakersbox from '@/components/common/Speakersbox'
import Modal from '@/components/speakers/Modal'
import { Speaker } from '@/sanity/schemas/speaker'
import { useState } from 'react'
import SectionTitle from '../common/sectionTitle'

export default function SpeakerSection(props: { speakers: Speaker[] }) {
	const [showModal, setShowModal] = useState(false)
	const [currSpeaker, setCurrSpeaker] = useState<Speaker>()

	return (
		<div className='outer-margin'>
			<div className='inner-margin'>
				<SectionTitle
					title='Speakers'
					tag='Renowned'
					image='/mic.png'
					viewAllLink='/speakers'
					viewAllText='View all speakers'
				/>
				<Modal showModal={showModal} setShowModal={setShowModal} currSpeaker={currSpeaker} />
				<Carousel>
					{props.speakers.map((speaker, idx) => (
						<Speakersbox
							key={idx}
							setCurrSpeaker={setCurrSpeaker}
							setShowModal={setShowModal}
							speaker={speaker}
							width=''
						/>
					))}
				</Carousel>
			</div>
		</div>
	)
}
