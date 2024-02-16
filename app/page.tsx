import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Sponsors from '@/components/sponsors/Sponsors'
import { client } from '@/sanity/lib/client'
import { Speaker } from '@/sanity/schemas/speaker'
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
  return (
    <div>
      <Navbar />
      <Hero />
      <SpeakersSection speakers={speakers} />
      {/* <Slider /> */}
      <Sponsors />
      <Footer />
    </div>
  )
}
