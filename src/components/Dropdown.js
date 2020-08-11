import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import styled from "styled-components";

const DropdownContainer = styled(Box)`
  position: absolute;
  left: -20%;
  top: 25px;
  background: #fff;
  padding: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  ul {
    list-style: none;
    li {
      min-width: 100px;
      margin: 5px;
      cursor: pointer;
      color: #595959;
    }
  }
`;

const ArrowIcon = ({ isActive, color = "currentColor" }) => {
  const style = {
    fill: color,
  };
  return isActive ? (
    <ExpandLessIcon style={style} />
  ) : (
    <ExpandMoreIcon style={style} />
  );
};

function Dropdown({ label, items, color = null }) {
  const [dropdownIsActive, setDropdownIsActive] = useState(false);

  const clickHandler = () => setDropdownIsActive(!dropdownIsActive);

  return (
    <div style={{ position: "relative" }}>
      <Box
        display="flex"
        alignItems="center"
        style={{ cursor: "pointer", marginRight: "50px" }}
        onClick={clickHandler}
      >
        <p style={{ userSelect: "none", color: color || "inherit" }}>{label}</p>
        <ArrowIcon color={color} isActive={dropdownIsActive} />
      </Box>
      {/* TODO: I tink that this isn't efficient, use css for visibiblity */}
      {dropdownIsActive && (
        <DropdownContainer>
          <ul>
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </DropdownContainer>
      )}
    </div>
  );
}

export default Dropdown;
