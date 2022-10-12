import React, { useState, useRef, useEffect } from "react";
import {
  AP,
  AudioPlayerContainer,
  AudioPlayerWrapper,
  ButtonItems,
  ButtonWrapper,
  CurrentTime,
  Duration,
  ItemsH2,
  PlaylistItems,
  PlaylistWrapper,
  ProgressBar,
  ProgressWrapper,
  Volume,
  VolumeContainer,
} from "./AudioPlayerElements";
import { BiPlay } from "react-icons/bi";
import { BiPause } from "react-icons/bi";
import { GrForwardTen } from "react-icons/gr";
import { GrBackTen } from "react-icons/gr";
import { BiFastForward } from "react-icons/bi";
import { BiRewind } from "react-icons/bi";
import { deepMerge } from "grommet/utils";
import { AudioData } from "./AudioData";
import { BsVolumeUpFill } from "react-icons/bs";
import Home from "../../pages";
import { TiThSmallOutline } from "react-icons/ti";
// import { Grommet } from "grommet";

const AudioPlayer = ({ isOpen, toggle }) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // const [nextSong, setNextSong] = useState(true);
  const [volume, setVolume] = useState(1);
  const [showVolume, setShowVolume] = useState(false);

  // references
  const audioPlayer = useRef(); //references our audio component
  const progressBar = useRef(); //references our progress bar
  const animationRef = useRef(); //references progress bar animation
  const volumeRef = useRef(); //references the volume button

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedMetaData, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  // const changeSong = ({ songUrl }) => {
  //   const nextValue = nextSong;
  //   setNextSong(!nextValue);
  //   if (!nextValue) {
  //     audioPlayer.current.load({ songUrl });
  //     audioPlayer.current.play();
  //   }
  // };

  // const changeSong = (songUrl) => {
  //   const nextValue = isPlaying;
  //   const tracks = audioPlayer.current.value.audioTracks({ songUrl });

  //   setIsPlaying(!nextValue);
  //   audioPlayer.current.currentSrc.load(songUrl);
  //   audioPlayer.current.value.play();
  // };

  // useEffect((songUrl) => {
  //   const song = document.getElementsByName({ songUrl });
  //   audioPlayer.current.value.play();
  // }, []);

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backTen = () => {
    progressBar.current.value = Number(progressBar.current.value - 10);
    changeRange();
  };

  const forwardTen = () => {
    progressBar.current.value = Number(progressBar.current.value + 10);
    changeRange();
  };

  const restartSong = () => {
    progressBar.current.value = 0;
    changeRange();
  };

  const myTheme = deepMerge(GrBackTen, {
    global: {
      colors: {
        brand: "#fff",
      },
    },
  });

  // const toggleMute = () => {
  //   const v = !showVolume;
  //   if (V) {
  //     setShowVolume("true");
  //   } else {
  //     setShowVolume("false");
  //   }
  // };

  const toggleMute = (e) => {
    const v = document.querySelector(".volumeToggle");
    if (e.currentTarget) {
      v.style.display = "flex";
    } else {
      v.style.display = "none";
    }
  };

  // useEffect(() => {
  //   document
  //     .getElementsByClassName("volumeToggle")
  //     .addEventListener("click", toggleMute);
  // }, []);

  return (
    <>
      <AudioPlayerContainer id="playlist">
        <AudioPlayerWrapper>
          <AP>
            <PlaylistWrapper>
              <PlaylistItems>
                {AudioData.map((song, i) => (
                  <ItemsH2 onClick={togglePlayPause} key={i}>
                    {song.title} by {song.artist}
                    <audio
                      ref={audioPlayer}
                      src={song.songUrl}
                      preload="metadata"
                      type="audio/mpeg"
                    ></audio>
                  </ItemsH2>
                ))}
              </PlaylistItems>
            </PlaylistWrapper>
            <ProgressWrapper>
              {/* current time */}
              <CurrentTime>{calculateTime(currentTime)}</CurrentTime>

              {/* progress bar */}
              <ProgressBar>
                <input
                  type="range"
                  className="progressBar"
                  defaultValue="0"
                  ref={progressBar}
                  onChange={changeRange}
                />
              </ProgressBar>

              {/* duration */}
              <Duration>
                {duration && !isNaN(duration) && calculateTime(duration)}
              </Duration>
            </ProgressWrapper>

            {/* Playlist Buttons */}

            <ButtonWrapper>
              <ButtonItems>
                <button>
                  <GrBackTen
                    className="gr-backten"
                    color="brand"
                    onClick={backTen}
                  />
                </button>
                <button className="bx bxs-rew transport" onClick={restartSong}>
                  <BiRewind />
                </button>
                <button onClick={togglePlayPause}>
                  {isPlaying ? (
                    <BiPause className="bx bxs-pause" />
                  ) : (
                    <BiPlay className="bx bxs-play" />
                  )}
                </button>
                <button className="bx bxs-ff transport">
                  <BiFastForward />
                </button>
                <button>
                  <GrForwardTen
                    className="gr-forwardten"
                    theme={myTheme}
                    onClick={forwardTen}
                  />
                </button>
                <VolumeContainer>
                  <button
                    className="volumeFull"
                    onClick={toggleMute}
                    showBorder="red"
                  >
                    <BsVolumeUpFill />
                  </button>
                  <Volume
                    className="volumeToggle"
                    type="range"
                    min={0}
                    max={1}
                    step={0.02}
                    value={volume}
                    onChange={(event) => {
                      setVolume(event.target.valueAsNumber);
                    }}
                  />
                </VolumeContainer>
              </ButtonItems>
            </ButtonWrapper>
          </AP>
        </AudioPlayerWrapper>
      </AudioPlayerContainer>
    </>
  );
};

export default AudioPlayer;
