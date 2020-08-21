import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const MainButton = styled(Button)`
  & {
    color: #fff !important;
    font-weight: bold;
    background: rgb(60, 45, 255);
    background: linear-gradient(
      45deg,
      rgba(60, 45, 255, 1) 0%,
      rgba(76, 45, 255, 1) 87%
    );
    padding: 10px 20px;
  }
`;

export const AllWidthMainButton = styled(MainButton)`
  & {
    width: 100%;
  }
  &:disabled {
    filter: opacity(0.8);
  }
`;

const ChipContainer = styled.div`
  border-radius: 100px;
  color: #fff;
  background: rgba(60, 45, 255, 0.69);
  padding: 2px 10px;
  margin-right: 10px;
  max-width: 100px;
  display: inline-block;
`;
export const Chip = ({ text }) => {
  return (
    <ChipContainer>
      <p>{text}</p>
    </ChipContainer>
  );
};
