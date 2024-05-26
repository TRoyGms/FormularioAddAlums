import React from "react";
import TableRow from "../atoms/TableRow";
import TableCell from "../atoms/TableCell";

function TableBody({ studentsList }) {
    const IterateNodes = ({ node }) => {
        if (!node) return null;
        return (
            <>
                <TableRow>
                    <TableCell>{node.data.nombre}</TableCell>
                    <TableCell>{node.data.apellidos}</TableCell>
                    <TableCell>{node.data.numero}</TableCell>
                    <TableCell>{node.data.hombre ? 'Si' : 'No'}</TableCell>
                    <TableCell>{node.data.mujer ? 'Si' : 'No'}</TableCell>
                    <TableCell>{node.data.grado}</TableCell>
                    <TableCell>{node.data.grupo}</TableCell>
                </TableRow>
                {node.next && <IterateNodes node={node.next} />}
            </>
        );
    };

    return (
            <tbody>
                {studentsList.head ? (
                    <IterateNodes node={studentsList.head} />
                ) : (
                    <TableRow>
                        <TableCell>No hay alumnos registrados</TableCell>
                    </TableRow>
                )}
            </tbody>
    );
}

export default TableBody;
