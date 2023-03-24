export interface Sound {
    name: string;
    path: string;
}

const useSound = (): Array<Sound> => {
    const audios = import.meta.glob("../assets/audio/list/*.mp3", { eager: true, as: 'url' });

    const sounds = Object.values(audios).map((audio) => {
        const name = audio.split('/').slice(-1)[0].replace('.mp3', '').replaceAll('_', ' ');


        return { name, path: audio };
    });

    return sounds;
}

export default useSound;