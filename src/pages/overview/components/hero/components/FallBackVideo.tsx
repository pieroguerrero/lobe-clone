import imgMobile from "../../../../../assets/images/hero/fallbackMobileVideo.webp";
import imgDesktop from "../../../../../assets/images/hero/fallbackDesktopVideo.webp";
interface Props {
  isMobile: boolean;
}
export default function FallBackVideo({ isMobile }: Props) {
  return (
    <img src={isMobile ? imgMobile : imgDesktop} alt="Fallback video image" />
  );
}
