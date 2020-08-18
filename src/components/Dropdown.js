import React from "react";
import Box from "@material-ui/core/Box";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styled from "styled-components";

const DropdownItemContainer = styled(Box)`
  cursor: pointer;
  margin-right: 50px;
  &:last-child {
    margin: 0;
  }
  position: relative;
  &:hover .dropwdown-content {
    display: block;
  }

  &:hover .dropdown-arrow-icon {
    transform: rotate(180deg);
  }
`;

const DropdownContainer = styled(Box)`
  display: none;
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
  &: ;
`;

const ArrowIcon = ({ color = "currentColor" }) => {
  const style = {
    fill: color,
  };
  return <ExpandMoreIcon style={style} className="dropdown-arrow-icon" />;
};

function Dropdown({ label, items, color = null }) {
  return (
    <DropdownItemContainer>
      <Box display="flex" alignItems="center">
        <p style={{ userSelect: "none", color: color || "inherit" }}>{label}</p>
        <ArrowIcon color={color} />
      </Box>
      <DropdownContainer className="dropwdown-content">
        <ul>
          {items.map((item, idx) => (
            <li key={idx} onClick={item.onClick}>
              {item.text}
            </li>
          ))}
        </ul>
      </DropdownContainer>
    </DropdownItemContainer>
  );
}

export default Dropdown;
