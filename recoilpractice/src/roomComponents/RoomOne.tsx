import styled from "styled-components";
import RoomTwo from "./RoomTwo";
import { IsNightProps } from "./Interface/interfaceFile";

const Wrraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 80%;
  height: 80%;
  background-color: white;
  border: 5px solid black;

  .off {
    width: 7rem;
    height: 7rem;
  }
`;

const RoomOne = ({ isnight }: IsNightProps) => {
  return (
    <Wrraper>
      <span>RoomOne</span>

      <RoomTwo isnight={isnight} />
    </Wrraper>
  );
};

export default RoomOne;
