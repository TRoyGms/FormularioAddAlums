import styled from "styled-components";

const TdStyled = styled.td`
    background-color: #505050;
    border: 1px #447e55 solid;
    padding: 8px;
    padding-right: 24px;
    text-align: left;
    color: azure;
    font-size: 12px;
`;

function TableCell({ children }) {
    return <TdStyled>{children}</TdStyled>;
}

export default TableCell;
