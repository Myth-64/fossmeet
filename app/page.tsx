import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Sponsors from '@/components/sponsors/Sponsors'
import WorkshopSection from '@/components/workshops/Section'
import { client } from '@/sanity/lib/client'
import { Speaker } from '@/sanity/schemas/speaker'
import { Workshop } from '@/sanity/schemas/workshop'
import Navbar from '../components/common/Navbar'
import SpeakersSection from '../components/speakers/Section'

export default async function Home() {
  const speakers = await client.fetch<Speaker[]>(
    `*[_type=="speaker"]`,
    {},
    {
      next: {
        revalidate: 60 * 60 * 24 * 7,
      },
    }
  )

  const workshops = await client.fetch<Workshop[]>(
    `*[_type=="workshop"]`,
    {},
    {
      next: {
        revalidate: 60 * 60 * 24 * 7,
      },
    }
  )

  return (
    <div>
      <Navbar />
      <Hero />
      <SpeakersSection speakers={speakers} />
      <WorkshopSection workshops={workshops} />
      {/* <Slider /> */}
      <Sponsors />
      <Footer />
    </div>
  )
}
