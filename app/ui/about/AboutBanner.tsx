"use client";

const AboutBanner = () => {
  return (
    <div className="h-[85vh] w-full overflow-hidden relative">
      <div className="bg-primary/10 flex flex-col h-full items-start justify-center text-6xl 2xl:text-7xl font-bold text-primary space-y-3">
        <div className="mx-[15%]">
          <h1>Our story</h1>
          <div className="ml-[45%] text-xl 2xl:text-2xl font-light text-justify">
            In the heart of Sungai Petani, a seed was planted in 1998 that would
            soon grow into the beloved coffee shop brand, Caffinated 1998. The
            founders, a group of friends with a shared passion for coffee,
            envisioned a place where people could come together over a cup of
            quality brew. They believed in the power of coffee to not just
            awaken the senses, but also to foster community and connection.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
