import CommentIcon from "@/components/client/icons/CommentIcon";
import ShareArrowIcon from "@/components/client/icons/ShareArrowIcon";
import LikeButton from "./LikeButton";
import ShortVideoAction from "./ShortVideoAction";
import { useEffect, useRef } from "react";
import type { ShortVideoData } from "@/types/ShortVideoData";
import { millify } from "millify";

interface Props {
  data: ShortVideoData;
}

const ShortsVideoCard: React.FC<Props> = ({ data }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVisibility: IntersectionObserverCallback = ([entry]) => {
      if (!videoRef.current) return;

      if (entry.isIntersecting) {
        videoRef.current.play().catch(() => {});
        return;
      }
      videoRef.current.pause();
    };

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.8,
    });

    observer.observe(video);

    return () => observer.unobserve(video);
  }, []);

  return (
    <div className="relative aspect-[9/16] h-full sm:w-auto sm:h-[calc(100vh-var(--h-navbar)-20px)] sm:mx-auto sm:mt-[10px]">
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
        <ShortVideoAction icon={CommentIcon} label={millify(data.comments)} />
        <ShortVideoAction icon={ShareArrowIcon} label={millify(data.shares)} />
      </div>
    </div>
  );
};

export default ShortsVideoCard;
