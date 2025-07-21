namespace voiceimport {
    //% block
    export function playImportedAudio(name: string): void {
        const audioFiles: { [key: string]: string } = {
            "infinite1": "https://bluesteve78.github.io/sonic-forces-voices/audio/infinite_voice1.mp3",
            "sonic1": "https://bluesteve78.github.io/sonic-forces-voices/audio/sonic_woohoo.mp3"
        };

        const url = audioFiles[name];
        if (!url) return;

        // Only runs in web browser (not on hardware)
        // @ts-ignore
        if (typeof window !== "undefined") {
            // @ts-ignore
            const audio = new window.Audio(url);
            audio.play().catch((e: any) => console.log("Playback error: " + e));
        }
    }
}
