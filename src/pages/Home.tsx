import { useRef, useState } from 'react';
import yosoy from '../assets/audio/yosoy.mp3';
import Sound from '../components/Sound';
import useSounds, { Sound as SoundInterface } from "../contexts/useSounds";

export default function Home({ changePage }: { changePage: () => void}) {
    const sounds = useSounds();
    const [currentSound, setCurrentSound] = useState<SoundInterface|null>(null);

    const [pabloImageIndex, setPabloImageIndex] = useState(Math.floor(Math.random() * 3));
    const pabloImages = Object.values(import.meta.glob("../assets/images/pablo_face*.svg", { eager: true, as: 'url' }));

    const pabloRef = useRef(null);
    const pabloSound = { name: 'pablo', path: yosoy };

    const goAboutPage = (e: React.SyntheticEvent) => {
        e.preventDefault();
        changePage();
    }

    const changePabloFace = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setPabloImageIndex((pabloImageIndex + 1) % 3);
    }

    return (
        <>
            <div className="button-container">
                { sounds.length ? sounds.map((sound) => {
                    return (
                        <Sound key={sound.path} sound={sound} currentSound={currentSound} setCurrentSound={setCurrentSound}>
                            { sound.name }
                        </Sound>
                    )
                }) : null }
                <Sound 
                    sound={pabloSound}
                    currentSound={currentSound}
                    setCurrentSound={setCurrentSound}
                    divClass='pablo-face'
                >
                    <a
                        href="#"
                        onClick={changePabloFace}
                    >
                        <img
                            alt="Pablo"
                            src={pabloImages[pabloImageIndex]}
                        />
                    </a>
                </Sound>
                <a className="about-us button-pablo" onClick={goAboutPage}>
                    ABOUT US
                </a>
            </div>
        </>
    )
}