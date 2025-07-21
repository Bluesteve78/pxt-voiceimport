namespace voiceimport {
    //% block
    export function playImportedAudio(name: string): void {
        const audioFiles: { [key: string]: string } = {
            "https://github.com/Bluesteve78/Sonic-sayingInfinite"
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
