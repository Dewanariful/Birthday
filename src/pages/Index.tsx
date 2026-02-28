import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { BirthdayWish } from '@/components/BirthdayWish'
import { TabsSection } from '@/components/TabsSection'
import { Gallery } from '@/components/Gallery'
import { Footer } from '@/components/Footer'
import { FloatingElements } from '@/components/FloatingElements'
import { SparkleAnimation } from '@/components/SparkleAnimation'
import { ScrollToTop } from '@/components/ScrollToTop'
import BackgroundMusic from '@/components/BackgroundMusic'

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingElements />
      <SparkleAnimation />
      <Header />
      <main>
        <BackgroundMusic/>
        <Hero />
        <BirthdayWish />
        <TabsSection />
        <Gallery />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
