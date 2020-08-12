import React from "react";
import styled from "styled-components";
import { useField } from "formik";
import { capitalizeWord } from "../utils";

const StyledField = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.error ? "#F5222D" : "#777")};
  height: 40px;
  width: 100%;
`;
const FieldContainer = styled.section`
  margin-bottom: 10px;
  position: relative;
`;

const ErrorMessage = styled.sub`
  color: #f5222d;
  margin: 0;
  // text-transform: capitalize
`;

function TextField({ label, isLabeled = true, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FieldContainer>
      <label>
        {isLabeled && label}
        <StyledField {...field} {...props} error={meta.touched && meta.error} />
        {meta.touched && meta.error && (
          <ErrorMessage>{capitalizeWord(meta.error)}</ErrorMessage>
        )}
      </label>
    </FieldContainer>
  );
}

export default TextField;
