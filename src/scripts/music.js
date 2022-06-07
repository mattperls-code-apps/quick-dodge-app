import arrayShuffle from "array-shuffle"

const Song = (id, url, title, artist, artwork) => ({ id, url, title, artist, artwork })

const OwensMusicLogo = require("../../assets/images/ONSkidz.png")

const music = arrayShuffle([
    Song("FloatingFree", require("../../assets/audio/ONSkidzFloatingFree.mp3"), "Floating Free", "Owen Skidmore", OwensMusicLogo),
    Song("Mountains", require("../../assets/audio/ONSkidzMountains.mp3"), "Mountains", "Owen Skidmore", OwensMusicLogo),
    Song("Skywards", require("../../assets/audio/ONSkidzSkywards.mp3"), "Skywards", "Owen Skidmore", OwensMusicLogo)
])

export default music