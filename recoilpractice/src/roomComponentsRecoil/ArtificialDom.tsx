import styled from "styled-components";
import RoomOne from "./RoomOne";
import { useState } from "react";
import { IsNightProps } from "./Interface/interfaceFile";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { seasonAtom } from "./Atom/atom";

const Wrraper = styled.div<IsNightProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: aliceblue;
  background-color: ${(props) => (props.isnight ? "black" : "white")};
  font-size: 4rem;

  span {
    position: absolute;
    top: 0;
    left: 0;

    color: plum;
    font-size: 4rem;
  }
`;

const ArtificialDomRecoil = () => {
  /** Interface 는 ./Interface/interfaceFile.ts 에 있습니다. */

  /** night 와 day 의 상태를 관리하는 useState */
  const [isnight, setIsNight] = useState<boolean>(true);

  const season = useRecoilValue(seasonAtom);
  const setSeasonRecoilFn = useSetRecoilState(seasonAtom);

  return (
    <Wrraper isnight={isnight}>
      <span>
        ArtificialDom - / isnight? : {isnight ? "night" : "Day"} / season :{" "}
        {season}
      </span>
      <button onClick={() => setIsNight((prev) => !prev)}>light on/Off</button>

      <RoomOne isnight={isnight} />
      <button onClick={() => setSeasonRecoilFn("Spring")}>Spring</button>
      <button onClick={() => setSeasonRecoilFn("Summer")}>Summer</button>
      <button onClick={() => setSeasonRecoilFn("Fall")}>Fall</button>
    </Wrraper>
  );
};

export default ArtificialDomRecoil;
