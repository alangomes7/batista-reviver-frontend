import ImageBannerWithTextPage from "@/components/Layout/ImageBannerWithTextPage";
import { SafeMarkdown } from "@/components/Markdown/SafeMarkdown";

type VisaoFeECruzProps = {
  markdown: string;
  imgUrl: string;
};

export default function VisaoFeECruzClient({
  markdown,
  imgUrl,
}: VisaoFeECruzProps) {
  return (
    <div className="mt-20">
      <ImageBannerWithTextPage
        title="Visão, Fé e Cruz"
        imageUrl={imgUrl}
        imageAlt="People worshiping in a church"
      >
        <SafeMarkdown markdown={markdown}></SafeMarkdown>
      </ImageBannerWithTextPage>
    </div>
  );
}
