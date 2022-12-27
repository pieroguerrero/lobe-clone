import { lazy, Suspense } from "react";
const DesktopHeader = lazy(() => import("./components/DesktopHeader"));
const MobileHeader = lazy(() => import("./components/MobileHeader"));

interface Props {
  /**
   * When TRUE, Mobile version is returned. Otherwhise Desktop version will be returned.
   */
  isMobile: boolean;
}
export default function Header({ isMobile }: Props) {
  return isMobile ? (
    <Suspense>
      <MobileHeader />
    </Suspense>
  ) : (
    <Suspense>
      <DesktopHeader />
    </Suspense>
  );
}
