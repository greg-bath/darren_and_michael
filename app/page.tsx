import Hero from '@/components/Hero';
import StickyNav from '@/components/StickyNav';
import ItineraryTabs from '@/components/ItineraryTabs';
import AccommodationSection from '@/components/AccommodationSection';
import ImportantInfo from '@/components/ImportantInfo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <div data-hero>
        <Hero />
      </div>

      <StickyNav />

      <main
        id="itinerary-start"
        className="max-w-[900px] mx-auto px-4 sm:px-8 w-full"
      >
        <ItineraryTabs />

        <hr className="section-divider mt-10" />
        <AccommodationSection />

        <hr className="section-divider" />
        <ImportantInfo />
      </main>

      <Footer />
    </>
  );
}
