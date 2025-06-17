import { useRef, useState } from "react";
import SpeakerOffFillIcon from "./icons/SpeakerOffFillIcon";
import SpeakerVolumeLoudIcon from "./icons/SpeakerVolumeLoudIcon";

export default function SpeakerButton() {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasInteractedRef = useRef(false);

  const createAndPlayAudio = async () => {
    const audio = new Audio("/audios/home/bg-audio.mp3");
    audio.loop = true;
    audio.volume = 1;
    audio.muted = false;

    try {
      await audio.play();
      audioRef.current = audio;
      setMuted(false);
    } catch (err) {
      console.warn("No se pudo reproducir el audio en el primer intento", err);
    }
  };

  const toggleExistingAudio = () => {
    if (!audioRef.current) return;
    const newMuted = !muted;
    audioRef.current.muted = newMuted;
    setMuted(newMuted);
  };

  const toggleMute = () => {
    if (!audioRef.current) {
      createAndPlayAudio();
    } else {
      toggleExistingAudio();
    }
    hasInteractedRef.current = true;
  };

  return (
    <button
      onClick={toggleMute}
      className="mt-0 p-2 rounded-full hover:scale-110 transition-transform cursor-pointer 
      absolute bottom-5 right-5 xl:bottom-40 xl:right-40"
    >
      {muted ? (
        <SpeakerOffFillIcon className="size-8" />
      ) : (
        <SpeakerVolumeLoudIcon className="size-8" />
      )}
    </button>
  );
}
