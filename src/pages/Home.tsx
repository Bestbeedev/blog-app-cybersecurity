import Hero from "@/components/common/customUI/Hero";
import Team from "@/components/common/customUI/Team";

import Formations  from '@/components/common/customUI/Formations/Cards/Categories_Formations'
import ArticlesCards from "@/components/common/customUI/Articles/Cards/ArticlesCards";
import ProductCards from "@/components/common/customUI/Products";
import QualitySection from "@/components/common/customUI/QualitySection";
import CtaSection from "@/components/common/customUI/CTASection";
import Sponsors from "@/components/common/customUI/Sponsors";
import Footer from "@/components/common/customUI/Footer";
import Newsletter from "@/components/common/customUI/NewsLetter";
export default function Home() {
  return (
    <div className="flex space-y-0 flex-col">
      <Hero/>
      <Formations/>
      <ArticlesCards/>
      <ProductCards/>
      <QualitySection/>
      <CtaSection/>
      <Sponsors/>
      <Team/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}
