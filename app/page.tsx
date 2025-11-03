import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Footer from "./components/Footer";


export default function Home() {
  const collaborators = [
    { src: "/images/AdomLabs.png", alt: "Adom Labs" },
    { src: "/images/AI-i-Nigeria.png", alt: "AI in Nigeria" },
    { src: "/images/Bazil.png", alt: "Bazil" },
    { src: "/images/Bloquest.png", alt: "Bloquest" },
    { src: "/images/CDS.png", alt: "CDS" },
    { src: "/images/chainDustry.png", alt: "ChainDustry" },
    { src: "/images/FutureLabs.png", alt: "Future Labs" },
    { src: "/images/infinityExchange.png", alt: "Infinity Exchange" },
    { src: "/images/Rabble.png", alt: "Rabble" },
    { src: "/images/Satoshi.png", alt: "Satoshi" },
    { src: "/images/WomenInDeFi.png", alt: "Women In DeFi" },
    { src: "/images/chainDrive.png", alt: "Chain Drive" },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Navbar
        extraLinks={[
          { label: "About Us", href: "/about" },
          { label: "IBX 26", href: "/landing" },
          { label: "IBX Tour", href: "/ibx tour" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/95 z-10"></div>
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/videos/header-vid.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 px-6 md:px-16 w-full max-w-[1280px] mx-auto pb-20 md:pb-24">
          <div className="w-full max-w-full md:max-w-[702px] flex flex-col gap-6 md:gap-8">
            <h1 className="font-[DM Sans] text-[40px] md:text-[56px] lg:text-[64px] font-black leading-tight md:leading-[64px] lg:leading-[72px] tracking-[-0.01em] text-white">
              West Africa Largest <span className="text-[#E87A12]">Blockchain</span> Campaign
            </h1>

            <p className="font-[DM Sans] text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[28px] tracking-[-0.015em] text-gray-300 max-w-[640px]">
              Empowering and unifying communities and connecting innovators to shape the future of Web3 and ignite blockchain adoption, innovation, and collaboration across West Africa and beyond
            </p>

            <div className="flex items-center gap-4 md:gap-6 mt-2">
              {/* Orange Button */}
              <Link
                href="/landing"
                className="bg-[#E87A12] text-black font-[DM Sans] font-bold text-[14px] md:text-[16px] rounded-lg px-6 md:px-8 py-3 md:py-3.5 transition-all duration-300 hover:bg-[#f68924] hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
              >
                2026 Event
              </Link>

              {/* White Outline Button */}
              <Link
                href="/ibx"
                className="text-white font-[DM Sans] font-bold text-[14px] md:text-[16px] border-2 border-white rounded-lg px-6 md:px-8 py-3 md:py-3.5 transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                IBX Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-black">
        {/* sponsor Section */}
        <section className="flex flex-col items-start justify-center w-full max-w-[1280px] mx-auto px-6 md:px-16 py-16 md:py-20">
          <div className="flex flex-col gap-6 max-w-[867px]">
            {/* Label */}
            <label className="font-[DM Sans] font-semibold text-[12px] md:text-[14px] leading-[20px] tracking-[0.1em] text-gray-400 uppercase">
              COLLABORATORS
            </label>

            {/* Heading */}
            <h5 className="font-['DT_Getai_Grotesk_Display'] font-black text-[24px] leading-[32px] tracking-[0%] text-white">
              Join 300+ communities in amplifying impact, inspire participation, and build the foundation and shaping a strong West African Blockchain story.
            </h5>

            {/* Button */}
            <Link
              href="/landing"
              className="bg-[#E87A12] text-black font-[DM Sans] font-bold text-[14px] md:text-[16px] rounded-lg px-6 md:px-8 py-3 md:py-3.5 w-fit transition-all duration-300 hover:bg-[#f68924] hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              Become a collaborator
            </Link>
          </div>
        </section>

        {/* Our Collaborators Section - DESKTOP */}
        <section className="py-20 w-full hidden md:block">
          <div className="w-full">

            {/* Collaborators Grid - Full Width */}
            <div className="mt-12 space-y-6 px-4">

              {/* Row 1 */}
              <div className="grid grid-cols-12 gap-4 w-full">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
                  <div key={`row1-${index}`} className="bg-black rounded-lg h-[80px] flex items-center justify-center">
                    <Image 
                      src={collaborators[index].src}
                      alt={collaborators[index].alt}
                      width={80}
                      height={80}
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-12 gap-4 w-full">
                {[2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 11, 10].map((index, i) => (
                  <div key={`row2-${i}`} className="bg-black rounded-lg h-[80px] flex items-center justify-center">
                    <Image 
                      src={collaborators[index].src}
                      alt={collaborators[index].alt}
                      width={80}
                      height={80}
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-12 gap-4 w-full">
                {[4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 10, 11].map((index, i) => (
                  <div key={`row3-${i}`} className="bg-black rounded-lg h-[80px] flex items-center justify-center">
                    <Image 
                      src={collaborators[index].src}
                      alt={collaborators[index].alt}
                      width={80}
                      height={80}
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-12 gap-4 w-full">
                {[6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 11, 10].map((index, i) => (
                  <div key={`row4-${i}`} className="bg-black rounded-lg h-[80px] flex items-center justify-center">
                    <Image 
                      src={collaborators[index].src}
                      alt={collaborators[index].alt}
                      width={80}
                      height={80}
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-12 gap-4 w-full">
                {[8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 10, 11].map((index, i) => (
                  <div key={`row5-${i}`} className="bg-black rounded-lg h-[80px] flex items-center justify-center">
                    <Image 
                      src={collaborators[index].src}
                      alt={collaborators[index].alt}
                      width={80}
                      height={80}
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Row 6 */}
              <div className="grid grid-cols-12 gap-4 w-full">
                {[11, 4, 5, 10, 3, 9, 0, 1, 2, 6, 8, 7].map((index, i) => (
                  <div key={`row6-${i}`} className="bg-black rounded-lg h-[80px] flex items-center justify-center">
                    <Image 
                      src={collaborators[index].src}
                      alt={collaborators[index].alt}
                      width={80}
                      height={80}
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Our Collaborators Section - MOBILE */}
        <section className="py-10 w-full md:hidden">
          <div className="px-4">
            <h2 className="font-display text-[28px] font-black leading-[36px] tracking-[-0.01em] mb-3">
              Our Collaborators
            </h2>

            <p className="font-sans text-[14px] font-normal leading-[20px] text-gray-300 mb-6">
              We are proud to partner with these industry leaders who share our passion for discovery and help make our expeditions possible.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-lg text-sm font-bold transition w-full mb-8">
              Become a collaborator
            </button>
          </div>

          {/* Collaborators Grid - Full Width Mobile */}
          <div className="space-y-4 px-2">

            {/* Row 1 */}
            <div className="grid grid-cols-6 gap-3 w-full">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div key={`mobile-row1-${index}`} className="bg-black rounded-lg h-[60px] flex items-center justify-center">
                  <Image 
                    src={collaborators[index].src}
                    alt={collaborators[index].alt}
                    width={48}
                    height={48}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-6 gap-3 w-full">
              {[6, 7, 8, 9, 10, 11].map((index, i) => (
                <div key={`mobile-row2-${i}`} className="bg-black rounded-lg h-[60px] flex items-center justify-center">
                  <Image 
                    src={collaborators[index].src}
                    alt={collaborators[index].alt}
                    width={48}
                    height={48}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-6 gap-3 w-full">
              {[1, 0, 4, 5, 2, 3].map((index, i) => (
                <div key={`mobile-row3-${i}`} className="bg-black rounded-lg h-[60px] flex items-center justify-center">
                  <Image 
                    src={collaborators[index].src}
                    alt={collaborators[index].alt}
                    width={48}
                    height={48}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-6 gap-3 w-full">
              {[7, 6, 9, 8, 11, 10].map((index, i) => (
                <div key={`mobile-row4-${i}`} className="bg-black rounded-lg h-[60px] flex items-center justify-center">
                  <Image 
                    src={collaborators[index].src}
                    alt={collaborators[index].alt}
                    width={48}
                    height={48}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-6 gap-3 w-full">
              {[3, 2, 1, 0, 5, 4].map((index, i) => (
                <div key={`mobile-row5-${i}`} className="bg-black rounded-lg h-[60px] flex items-center justify-center">
                  <Image 
                    src={collaborators[index].src}
                    alt={collaborators[index].alt}
                    width={48}
                    height={48}
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Row 6 */}
            <div className="grid grid-cols-6 gap-3 w-full">
              {[10, 11, 8, 9, 6, 7].map((index, i) => (
                <div key={`mobile-row6-${i}`} className="bg-black rounded-lg h-[60px] flex items-center justify-center">
                  <Image 
                    src={collaborators[index].src}
                    alt={collaborators[index].alt}
                    width={48}
                    height={48}
                    className="object-contain"
                    loading="lazy"
                    />
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}