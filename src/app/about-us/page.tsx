import ImageWithTextPage from "@/components/Layout/ImageWithTextPage";

const IMAGE_URL = "/homePage/carousel/image01.jpeg";

export default function AboutUsPage() {
  return (
    <ImageWithTextPage
      title="About Us"
      imageUrl={IMAGE_URL}
      imageAlt="People worshiping in a church"
    >
      <p>
        Welcome to our page. This is the first paragraph of the page content. It
        can contain any text or other React components you want.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        nisl nec ultricies lacinia, nisl nisl aliquet aliquet, nec ultricies
        nisl nisl eget nisl.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>This layout supports lists.</li>
        <li>And other content.</li>
      </ul>
    </ImageWithTextPage>
  );
}
