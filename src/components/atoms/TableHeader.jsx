import styled from "styled-components";

const ThStyled = styled.th`
    background-color: #111111;
    border: 1px #447e55 solid;
    padding: 8px;
    padding-right: 24px;
    text-align: left;
    color: azure;
    font-size: 16px;
`;

function TableHeader({ children }) {
    return <ThStyled>{children}</ThStyled>;
}

export default TableHeader;
