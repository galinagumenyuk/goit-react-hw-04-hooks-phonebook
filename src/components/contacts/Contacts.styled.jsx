import styled from "@emotion/styled";

export const ContactItem = styled.ul`
  padding-left: 0px;
`;

export const DeleteButton = styled.button`
width: 40 px;
 padding: 1px;
 margin-left: 10px;
  border-radius: 4px
  border: 1px

  color: #708090;
  font-family: "Times New Roman";
  font-size: 11px;
  cursor: pointer;
`;

export const Contact = styled.li`
  list-style-type: none;
  font-family: "Times New Roman";
  margin-bottom: 5px;

  span + span {
    margin-left: 15px;
  }
`;
