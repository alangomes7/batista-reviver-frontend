import ImageWithTextPage from "@/components/Layout/ImageSideWithTextPage";

const IMAGE_URL = "/homePage/carousel/image01.jpeg";

export default function AboutUsPage() {
  return (
    <div className="mt-20">
      <ImageWithTextPage
        title="Quem Somos"
        imageUrl={IMAGE_URL}
        imageAlt="People worshiping in a church"
      >
        <p>Uma igreja batista vivendo os propósitos de Deus</p>
      </ImageWithTextPage>
    </div>
  );
}
