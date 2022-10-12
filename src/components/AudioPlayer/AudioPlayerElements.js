import styled from "styled-components";

export const AudioPlayerContainer = styled.div`
  --primary: #010606;

  box-sizing: border-box;
  display: flex;
  background: var(--primary);
  height: 500px;
  align-items: center;
`;

export const AudioPlayerWrapper = styled.div`
  width: 6000px;
  display: flex;
  justify-content: center;
`;

export const AP = styled.div`
  display: flex;
  flex-direction: column;
`;

// Progress Bar

export const ProgressWrapper = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const CurrentTime = styled.div`
  display: flex;
  padding-right: 5px;
  color: #fff;
`;
export const ProgressBar = styled.div`
  display: flex;
`;
export const Duration = styled.div`
  display: flex;
  padding-left: 5px;
  color: #fff;
`;

// Transport Buttons

export const ButtonWrapper = styled.div`
  display: flex;
  margin-right: 10px;
  justify-content: center;
`;

export const GrForwardTen = styled.button`
  display: flex;
  background: none;
  align-items: center;
  color: #fff;

  &:hover {
    color: var(--primary);
    cursor: pointer;
  }
`;

export const GrBackTen = styled.button`
  display: flex;
  background: none;
  align-items: center;

  &:hover {
    color: var(--primary);
    cursor: pointer;
  }
`;

export const GrRewindFill = styled.button`
  background: none;
`;

export const GrPlayFill = styled.button`
  background: none;
  border-radius: 50%;
`;

export const GrPauseFill = styled.button``;

export const GrFastForwardFill = styled.button`
  background: none;
`;

// Playlist

export const PlaylistWrapper = styled.div`
  display: grid;
  color: #fff;
  width: 100%;
`;

export const PlaylistItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 600px;
`;

export const ItemsH2 = styled.h2`
  display: flex;
  border: 1px solid white;
  width: 75%;
  height: 30px;
  cursor: pointer;
  font-size: 16px;
  align-items: center;
  padding: 20px;
  font-weight: 10;

  &:hover {
    background-color: #adadad;
  }
`;

export const BsVolumeUpFill = styled.div`
  display: flex;
`;

export const BsFillVolumeMuteFill = styled.div`
  display: flex;
`;

export const Volume = styled.input`
  display: ${(ace) => (ace ? "none" : "flex")};
  //   display: ${(props) => props.showVolume || "none"};
  //   border: ${(props) => props.showBorder || "blue"};
  //
`;

export const ButtonItems = styled.div`
  display: flex;
`;

export const VolumeContainer = styled.div`
  display: flex;
`;
