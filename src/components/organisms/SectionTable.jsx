import React from "react";
import styled from "styled-components";
import TableHead from "../molecules/TableHead";
import TableBody from "../molecules/TableBody";

const TableStyled = styled.table`
    width: 80%;
    border-collapse: collapse;
`;

function SectionTable({ studentsList }) {
    return (
        <div id="section_table">
            <h2>Lista de Alumnos Registrados</h2>
            <TableStyled>
                <TableHead />
                <TableBody studentsList={studentsList} />
            </TableStyled>
        </div>
    );
}

export default SectionTable;
