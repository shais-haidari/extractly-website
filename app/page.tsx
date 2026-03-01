import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Features from "@/components/features";
import Showcase from "@/components/showcase";
import Testimonials from "@/components/testimonials";
import UseCases from "@/components/use-cases";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Problem />
        <Features />
        <Showcase />
        <Testimonials />
        <UseCases />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
