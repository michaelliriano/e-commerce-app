import { useCallback, useEffect, useState } from "react";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { useRouter } from "next/router";

export default function useLightBox() {
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  const [imageIndex, setImageIndex] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  const plugins = [Thumbnails, Zoom, Fullscreen];

  const open = useCallback(() => {
    setIsLightBoxOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsLightBoxOpen(false);
  }, []);

  const reset = useCallback(() => {
    setIsLightBoxOpen(false);
    setImageIndex(0);
  }, []);

  useEffect(() => {
    setImageIndex(0);
  }, [id]);

  return {
    isLightBoxOpen,
    imageIndex,
    plugins,
    close,
    reset,
    setImageIndex,
    open,
  };
}
