import { CarouselHomePage } from "@/components/Carousel/HomePage";
import ImageWithTextPage from "@/components/Layout/ImageSideWithTextPage";
import MapPageLayout from "@/components/Layout/MapPageLayout";

export default function Home() {
  const IMAGE_URL = "/homePage/carousel/image01.jpeg";
  return (
    <>
      <CarouselHomePage />;
      <ImageWithTextPage
        title="Sobre nós"
        imageUrl={IMAGE_URL}
        imageAlt="People worshiping in a church"
      >
        <p>Uma igreja família vivendo o propósito de Deus</p>
      </ImageWithTextPage>
      <MapPageLayout
        title="Venha nos visitar"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.99430136589646!2d-42.71926924029005!3d-22.731630106080676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99c4a7b027057f%3A0xf0682d6ba29eafa4!2sMinist%C3%A9rio%20Batista%20do%20Avivamento!5e0!3m2!1sen!2sbr!4v1763381588631!5m2!1sen!2sbr"
      ></MapPageLayout>
    </>
  );
}
