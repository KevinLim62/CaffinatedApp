import AboutBanner from '@/app/ui/about/AboutBanner';
import StickyScroll from '@/app/ui/about/StickyScroll';

const locations = [
  {
    city: 'Bayan Lepas, Penang',
    address: 'Address 1',
    imageSrc: '/locations/bayanLepas.jpg',
  },
  {
    city: 'Georgetown, Penang',
    address: 'Address 2',
    imageSrc: '/locations/georgetown.jpg',
  },
  {
    city: 'Petaling Jaya, Selangor',
    address: 'Address 3',
    imageSrc: '/locations/petalingJaya.jpg',
  },
  {
    city: 'Johor Bahru, Johor',
    address: 'Address 4',
    imageSrc: '/locations/johorBahru.jpg',
  },
];

export default function About() {
  return (
    <main className='flex flex-col min-h-screen min-w-[320px] items-center'>
      <AboutBanner />
      <div className='w-full p-5'>
        <StickyScroll locations={locations} />
      </div>
    </main>
  );
}
