'use client';

const AboutBanner = () => {
  return (
    <div className='h-[70vh] w-full overflow-hidden relative'>
      <div className='bg-primary/10 w-full h-full backdrop-blur-[50px]'>
        <div className='absolute inset-y-[30%] inset-x-[10%] text-6xl 2xl:text-7xl font-bold text-primary whitespace-nowrap space-y-3'>
          <h1>Our</h1>
          <h1>Story</h1>
          <div className='text-xl 2xl:text-2xl font-medium'>
            In the heart of Sungai Petani, a seed was planted in 1998 that would soon grow into the beloved coffee shop brand, Caffinated 1998. The founders, a group of friends with a shared passion for coffee, envisioned a place where people could come together over a cup of quality brew. They
            believed in the power of coffee to not just awaken the senses, but also to foster community and connection.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
