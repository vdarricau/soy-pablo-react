import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";
import { Sound } from "../contexts/useSounds";

export default function Sound(
    { children, divClass = '', sound, currentSound, setCurrentSound }: 
    { children: ReactNode, divClass?: string, sound: Sound, currentSound: Sound|null, setCurrentSound: Dispatch<SetStateAction<Sound | null>> }
) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const audio =  audioRef.current;


    useEffect(() => {
        if (currentSound?.name !== sound.name) {
            audio?.pause();
        }
    }, [currentSound]);

    const play = () => {
        setCurrentSound(sound);
        audio?.play();
    }

    return (
        <>
            <button
                className={"button-pablo " + divClass}
                key={ sound.path }
                onClick={play}
            >
                <audio
                    ref={audioRef}
                    src={ sound.path }>
                </audio>
                { children }
            </button>
        </>
    )
}