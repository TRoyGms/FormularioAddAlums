import styled from "styled-components";

const TrStyled = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
        color: azure;
    }
`;

function TableRow({ children }) {
    return <TrStyled>{children}</TrStyled>;
}

export default TableRow;
