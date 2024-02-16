import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Sponsors from '@/components/sponsors/Sponsors'
import { client } from '@/sanity/lib/client'
import { Speaker } from '@/sanity/schemas/speaker'
import Navbar from '../components/common/Navbar'
import SpeakerCarousel from '../components/speakers/Carousel'

export default async function Home() {
  const speakers = await client.fetch<Speaker[]>(
    `*[_type=="speaker"]`,
    {},
    {
      next: {
        revalidate: 0,
      },
    }
  )
  return (
    <div>
      <Navbar />
      <Hero />
      <SpeakerCarousel speakers={speakers} />
      {/* <Slider /> */}
      <Sponsors />
      <Footer />
    </div>
  )
}
