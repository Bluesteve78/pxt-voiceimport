namespace voiceimport {
    //% block
    export function playImportedAudio(name: string) {
        const audioFiles: { [key: string]: string } = {
            "https://github.com/Bluesteve78/Sonic-sayingInfinite"

        const url = audioFiles[name];
        if (!url) return;

        // @ts-ignore
        if (typeof window !== "undefined") {
            // @ts-ignore
            const audio = new window.Audio(url);
            audio.play().catch(e => console.log("Playback error", e));
        }
    }
}
