namespace voiceimport {
    //% block
    export function playImportedAudio(name: string): void {
        let url = "";

        if (name == "infinite1") {
            url = "https://bluesteve78.github.io/sonic-forces-voices/audio/infinite_voice1.mp3";
        } else if (name == "sonic1") {
            url = "https://bluesteve78.github.io/sonic-forces-voices/audio/sonic_woohoo.mp3";
        }

        if (url == "") return;

        // Only works in web browser
        //% shim=KIND_OF_HACK
        // @ts-ignore
        if (typeof window !== "undefined") {
            // @ts-ignore
            const audio = new window.Audio(url);
            audio.play().catch((e: any) => console.log("Playback error: " + e));
        }
    }
}
