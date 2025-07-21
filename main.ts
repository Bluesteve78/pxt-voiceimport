//% color=#AA00FF icon="\uf028" block="Voice Import"
namespace voiceimport {

    // Map file names to URLs (simulate import)
    const audioFiles: { [key: string]: string } = {
        "voice1.mp3": "https://example.com/audio/voice1.mp3",
        "voice2.mp3": "https://example.com/audio/voice2.mp3"
        // Add your hosted audio URLs here
    }

    //% block="play imported audio %filename"
    export function playImportedAudio(filename: string): void {
        let url = audioFiles[filename]
        if (!url) {
            console.warn(`Audio file '${filename}' not found.`)
            return
        }
        // Create HTML audio element and play
        let audio = new Audio(url)
        audio.play().catch(e => {
            console.warn(`Failed to play audio: ${e}`)
        })
    }
}
