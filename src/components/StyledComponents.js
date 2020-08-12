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
