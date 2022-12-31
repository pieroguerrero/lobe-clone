import imgMobile from "../../../../../assets/videos/fallbackMobileVideo.jpg";
import imgDesktop from "../../../../../assets/videos/fallbackDesktopVideo.jpg";
interface Props {
  isMobile: boolean;
}
export default function FallBackVideo({ isMobile }: Props) {
  return (
    <img
      loading="lazy"
      src={isMobile ? imgMobile : imgDesktop}
      alt="Fallback video image"
    />
  );
}
