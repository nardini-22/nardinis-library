import styled from "styled-components";
import { Button } from "../../Register/Body/styles";

export const Table = styled.table`
  border-collapse: collapse;
  & td,
  th {
    border: 1px solid ${(props) => props.theme.main.primary};
    text-align: left;
    padding: 8px;
    text-align: center;
  }
  & tr:nth-child(even) {
    background: #dddddd;
  }
  & th {
    background: ${(props) => props.theme.main.primary};
    color: ${(props) => props.theme.main.primaryText};
  }
`;

export const BodyFormContainer = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableContainer = styled(BodyFormContainer)``;

export const TableWrapper = styled.div`
  @media screen and (max-width: 767px) {
    overflow-y: scroll;
    width: 100%;
    padding: 0 10px 0 10px;
  }
`;

export const TableButton = styled(Button)`
  margin: 0;
`;

export const TableButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 0 10px 0;
  width: 100%;
`;

export const BooksPageTitle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: ${(props) => props.theme.main.primary};
`;
