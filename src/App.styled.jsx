import styled from "@emotion/styled";

export const Container = styled.div`
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;

  form {
    border: 2px solid;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  label {
    color: #708090;
    font-family: "Times New Roman";
  }

  input {
    display: block;
    margin-top: 3px;
    margin-bottom: 10px;
  }
`;
export const ListTitle = styled.p`
  font-weight: 700;
  font-family: "Times New Roman";
`;
