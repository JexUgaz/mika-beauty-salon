import CommentIcon from "@/components/client/icons/CommentIcon";
import ShareArrowIcon from "@/components/client/icons/ShareArrowIcon";
import LikeButton from "./LikeButton";
import ShortVideoAction from "./ShortVideoAction";
import { useEffect, useRef, useState } from "react";
import type { ShortVideoData } from "@/types/ShortVideoData";
import { millify } from "millify";
import RegisterComponent from "./RegisterComponent";
import { RippleButton } from "@/components/client/RippleButton";

interface Props {
  data: ShortVideoData;
}

const ShortsVideoCard: React.FC<Props> = ({ data }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showRegister, setShowRegister] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVisibility: IntersectionObserverCallback = ([entry]) => {
      if (!videoRef.current) return;

      if (entry.isIntersecting) {
        videoRef.current.play().catch(() => {});
        return;
      }
      videoRef.current?.pause();
    };

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.8,
    });

    observer.observe(video);

    return () => observer.disconnect();
  }, [videoRef.current]);

  return (
    <div className="relative max-w-[100dvw] aspect-[9/16] h-full sm:w-auto sm:h-[calc(100dvh-var(--h-navbar)-20px)] sm:mx-auto sm:mt-[10px]">
      {!showRegister && (
        <>
          <video
            ref={videoRef}
            className="h-full w-full object-contain sm:rounded-4xl"
            controlsList="nodownload"
            loop
            controls
            autoPlay
            playsInline
          >
            <source src={data.src} type="video/webm" />
            Tu navegador no soporta video.
          </video>
          <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-black/80 to-transparent z-0 pointer-events-none sm:rounded-4xl" />

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-300">
            <RippleButton
              className="size-18 md-height:size-20 rounded-full"
              onClick={() => setShowRegister(true)}
            >
              <img
                alt="Heels"
                className="size-full transition-all duration-300"
                src="/images/feel-the-rhythm/heels.webp"
              />
            </RippleButton>
          </div>

          <div className="absolute top-5 left-5 text-white z-10 max-w-[80%]">
            <div className="flex items-center gap-2">
              <img
                src={data.srcProfile}
                alt={`Foto de ${data.username}`}
                className="w-8 h-8 rounded-full object-cover"
              />
              <h2 className="text-sm">@{data.username}</h2>
            </div>
            <p className="mt-2 text-sm line-clamp-3">{data.description}</p>
          </div>

          <div
            className={`absolute bottom-25 right-2 sm:-right-15 z-10 flex flex-col gap-4 text-white`}
          >
            <LikeButton likes={data.likes} />
            <ShortVideoAction
              icon={CommentIcon}
              label={millify(data.comments)}
            />
            <ShortVideoAction
              icon={ShareArrowIcon}
              label={millify(data.shares)}
            />
          </div>
        </>
      )}
      {showRegister && (
        <RegisterComponent goBack={() => setShowRegister(false)} />
      )}
    </div>
  );
};

export default ShortsVideoCard;
