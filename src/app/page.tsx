import Arrivals from "@/components/arrivals";
import Favorite from "@/components/favorite";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LogoSlide from "@/components/logo-slide";
import Promo from "@/components/promo";
import Voucher from "@/components/voucher";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoSlide />
      <Arrivals />
      <Promo />
      <Favorite />
      <Voucher />
      <Footer />
    </>
  );
}
