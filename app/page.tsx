import Image from 'next/image'
import CarouselDefault from '@/components/Carousel'
import YoutubeEmbedding from '@/components/YoutubeEmbedding'
import EventsDetails from '@/components/EventsDetails';
import Location from '@/components/Location';
import ContactForm from '@/components/ContactForm';

export default function Home() {

  const youtubeLink = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const videoId = youtubeLink.split('v=')[1];

  return (
    <div>
      <section className='p-8'>
        <CarouselDefault />
      </section>
      <section className='p-8'>
        <YoutubeEmbedding videoId={videoId} />
      </section>
      <section className='p-8'>
        <EventsDetails />
      </section>
      <section className='p-8'>
        <Location />
      </section>
      <section className='p-8'>
        <ContactForm />
      </section>

    </div>
  )
}