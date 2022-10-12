import React from "react";
import { ButtonWrapper } from "../AudioPlayer/AudioPlayerElements";
import { Arrow, ArrowButton, ArrowContainer } from "./DownArrowElements";
import { BiChevronDownCircle } from "react-icons/bi";
import { useState } from "react";
import { GiConsoleController } from "react-icons/gi";
import { useRef } from "react";
import AudioPlayer from "../AudioPlayer";

const DownProgressArrow = () => {
  const playlistSection = useRef(null);
  const scrollToPlaylist = () =>
    window.scrollBy({ top: 800, behavior: "smooth" });

  return (
    <ArrowContainer>
      <ButtonWrapper>
        <ArrowButton>
          <Arrow>
            <button
              className="bx bx-ChevronDownCircle"
              ref={playlistSection}
              onClick={scrollToPlaylist}
              smooth="true"
            >
              <BiChevronDownCircle className="bx bx-ChevronDownCircle" />
            </button>
          </Arrow>
        </ArrowButton>
      </ButtonWrapper>
    </ArrowContainer>
  );
};

export default DownProgressArrow;
