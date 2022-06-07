import React, { useState, useEffect } from "react"

import { View, Text, StyleSheet, StatusBar, AppState } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faPause, faPlay, faMusic, faVolumeMute } from "@fortawesome/free-solid-svg-icons"

import haptic from "../scripts/haptic"
import Game from "../scripts/game"
import screen from "../scripts/screen"
import songs from "../scripts/music"

import KeepAwake from "react-native-keep-awake"
import MMKVStorage from "react-native-mmkv-storage"
import TrackPlayer, { RepeatMode } from "react-native-track-player"

const GameStack = ({ navigation }) => {
    let [game, setGame] = useState(new Game())

    let [highScore, setHighScore] = useState(0)
    let [playMusic, setPlayMusic] = useState(false)

    let [touchX, setTouchX] = useState(0)

    const update = () => {
        game.update()
        setGame({...game})
        const MMKV = new MMKVStorage.Loader().initialize()
        MMKV.getIntAsync("high score").then(currentHighScore => {
            if(game.score > currentHighScore){
                MMKV.setIntAsync("high score", game.score)
                setHighScore(game.score)
            }
        })
        requestAnimationFrame(update)
    }

    useEffect(() => {
        AppState.addEventListener("change", (state) => {
            if(state == "inactive"){
                if(game.state == "inGamePlaying"){
                    game.togglePlayState()
                }
            }
        })
        KeepAwake.activate()
        const MMKV = new MMKVStorage.Loader().initialize()
        MMKV.getIntAsync("high score").then(value => {
            if(value == undefined){
                MMKV.setIntAsync("high score", 0)
                setHighScore(0)
            } else {
                setHighScore(value)
            }
        })
        TrackPlayer.setupPlayer().then(() => {
            TrackPlayer.updateOptions({
                stopWithApp: true,
                alwaysPauseOnInterruption: true
            }).then(() => {
                TrackPlayer.addEventListener("playback-track-changed", () => null)
                TrackPlayer.addEventListener("playback-state", () => null)
                TrackPlayer.setRepeatMode(RepeatMode.Queue)
            }).then(() => {
                TrackPlayer.add(songs)
            }).then(() => {
                MMKV.getBoolAsync("play music").then(value => {
                    if(value == undefined){
                        MMKV.setBoolAsync("play music", true)
                        setPlayMusic(true)
                    } else {
                        setPlayMusic(value)
                    }
                })
            })
        })
        update()
    }, [])

    useEffect(() => {
        playMusic ? TrackPlayer.play() : TrackPlayer.pause()
    }, [playMusic])

    const buttonColors = {
        backgroundColor: `hsl(${game.hue}, 100%, 17.5%)`,
        borderColor: `hsl(${game.hue}, 100%, 2.5%)`
    }

    return (
        <React.Fragment>
            <StatusBar barStyle={"light-content"} />
            <View style={{ position: "absolute" }} onTouchStart={(e) => {
                setTouchX(e.nativeEvent.pageX)
            }} onTouchMove={(e) => {
                if(game.state == "inGamePlaying"){
                    game.player.x += 1.25 * (e.nativeEvent.pageX - touchX)
                    game.player.x = Math.min(Math.max(game.player.x, game.player.radius), screen.width - game.player.radius)
                    game.addMovement(e.nativeEvent.pageX)
                    setTouchX(e.nativeEvent.pageX)
                }
            }}>
                <game.Render />
            </View>
            <SafeAreaView>
                <View style={{ position: "relative" }}>
                    <View style={[styles.button, buttonColors, { top: 20, left: 20, width: 220 }]}>
                        <Text style={styles.label}>High Score:
                            { " " + highScore }
                        </Text>
                    </View>
                    {
                        !game.isFirstGame && (
                            <View style={[styles.button, buttonColors, { top: 105, left: 20, width: 220 }]}>
                                <Text style={styles.label}>
                                    { game.state != "outOfGame" ? "Current " : "Last " }
                                    Score:
                                    { " " + game.score }
                                </Text>
                            </View>
                        )
                    }
                    {
                        game.state != "outOfGame" && (
                            <View style={[styles.button, buttonColors, { top: 20, right: 20, width: 70 }]} onTouchEnd={() => {
                                haptic("impactLight")
                                game.togglePlayState()
                            }}>
                                <FontAwesomeIcon icon={game.state == "inGamePlaying" ? faPause : faPlay} size={24} color={"rgb(255, 255, 255)"} />
                            </View>
                        )
                    }
                    <View style={[styles.button, buttonColors, { top: (game.state != "outOfGame") ? 105 : 20, right: 20, width: 70 }]} onTouchEnd={() => {
                        haptic("impactLight")
                        const MMKV = new MMKVStorage.Loader().initialize()
                        MMKV.setBoolAsync("play music", !playMusic)
                        setPlayMusic(!playMusic)
                    }}>
                        <FontAwesomeIcon icon={playMusic ? faMusic : faVolumeMute} size={24} color={"rgb(255, 255, 255)"} />
                    </View>
                    {
                        game.state != "inGamePlaying" ? (
                            <React.Fragment>
                                <View style={[styles.button, buttonColors, { top: 240, left: screen.width / 2 - 130, width: 260 }]} onTouchEnd={() => {
                                    haptic("impactLight")
                                    game.restart()
                                }}>
                                    <Text style={styles.label}>New Game</Text>
                                </View>
                                <View style={[styles.button, buttonColors, { top: 325, left: screen.width / 2 - 140, width: 280 }]} onTouchEnd={() => {
                                    haptic("impactLight")
                                    navigation.push("Credits")
                                }}>
                                    <Text style={styles.label}>Credits</Text>
                                </View>
                                <View style={[styles.button, buttonColors, { top: 410, left: screen.width / 2 - 140, width: 280 }]} onTouchEnd={() => {
                                    haptic("impactLight")
                                    navigation.push("PrivacyPolicy")
                                }}>
                                    <Text style={styles.label}>Privacy Policy</Text>
                                </View>
                                    <View style={[styles.button, buttonColors, { top: 495, left: screen.width / 2 - 140, width: 280 }]} onTouchEnd={() => {
                                        haptic("impactLight")
                                        navigation.push("TermsAndConditions")
                                    }}>
                                        <Text style={styles.label}>Terms And Conditions</Text>
                                    </View>
                            </React.Fragment>
                        ) : (
                            game.bonusPointMessage != false && (
                                <View style={styles.bonusPointMessageContainer}>
                                    <Text style={styles.bonusPointMessageText}>{ game.bonusPointMessage.text }</Text>
                                </View>
                            )
                        )
                    }
                </View>
            </SafeAreaView>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        height: 70,
        borderRadius: 20,
        borderWidth: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    label: {
        color: "rgb(255, 255, 255)",
        fontFamily: "Quicksand",
        fontWeight: "900",
        fontSize: 18
    },
    bonusPointMessageContainer: {
        position: "absolute",
        top: 240,
        left: 0,
        right: 0,
        height: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    bonusPointMessageText: {
        color: "rgb(255, 255, 255)",
        fontFamily: "Quicksand",
        fontWeight: "900",
        fontSize: 28
    }
})

export default GameStack