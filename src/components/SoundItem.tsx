import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";
import { Sound } from "../contexts/useSounds";

export default function SoundItem(
    { children, divClass = '', sound, currentSound, setCurrentSound }: 
    { children: ReactNode, divClass?: string, sound: Sound, currentSound: Sound|null, setCurrentSound: Dispatch<SetStateAction<Sound | null>> }
) {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (currentSound !== null && currentSound?.name !== sound.name) {
            audioRef.current?.pause();
        }
    }, [currentSound]);

    const play = () => {
        setCurrentSound(sound);
        audioRef.current?.play();
    }

    return (
        <>
            <button
                className={"button-pablo " + divClass}
                onClick={play}
            >
                <audio
                    ref={audioRef}
                    src={sound.path}>
                </audio>
                { children }
            </button>
        </>
    )
}