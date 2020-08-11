import React from "react";
import styled from "styled-components";
import { useField } from "formik";

const StyledField = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #777;
  height: 40px;
  width: 100%;
  margin-bottom: 10px;
`;

function TextField({ label, isLabeled = true, ...props }) {
  const [field] = useField(props);
  return (
    <section>
      <label>
        {isLabeled && label}
        <StyledField {...field} {...props} />
      </label>
    </section>
  );
}

export default TextField;
