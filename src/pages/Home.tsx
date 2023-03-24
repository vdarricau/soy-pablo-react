import { useState } from 'react';
import yosoy from '../assets/audio/yosoy.mp3';
import SoundItem from '../components/SoundItem';
import useSounds, { Sound } from "../contexts/useSounds";

export default function Home({ changePage }: { changePage: () => void }) {
    const sounds = useSounds();
    const [currentSound, setCurrentSound] = useState<Sound|null>(null);

    const [pabloImageIndex, setPabloImageIndex] = useState(Math.floor(Math.random() * 3));
    const pabloImages = Object.values(import.meta.glob("../assets/images/pablo_face*.svg", { eager: true, as: 'url' }));

    const pabloSound = { name: 'pablo', path: yosoy };

    const changePabloFace = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setPabloImageIndex((pabloImageIndex + 1) % 3);
    }
    
    const goAboutPage = (e: React.SyntheticEvent) => {
        e.preventDefault();
        changePage();
    }

    return (
        <>
            <div className="button-container">
                { sounds.length ? sounds.map((sound) => {
                    return (
                        <SoundItem key={sound.path} sound={sound} currentSound={currentSound} setCurrentSound={setCurrentSound}>
                            { sound.name }
                        </SoundItem>
                    )
                }) : null }

                <SoundItem 
                    sound={pabloSound}
                    currentSound={currentSound}
                    setCurrentSound={setCurrentSound}
                    divClass='pablo-face'
                >
                    <img
                        onClick={changePabloFace}
                        alt="Pablo"
                        src={pabloImages[pabloImageIndex]}
                    />
                </SoundItem>
                
                <a className="about-us button-pablo" onClick={goAboutPage}>
                    ABOUT US
                </a>
            </div>
        </>
    )
}