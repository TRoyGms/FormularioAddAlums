import React from "react";
import TableRow from "../atoms/TableRow";
import TableHeader from "../atoms/TableHeader";

function TableHead() {
    return (
        <thead>
            <TableRow>
                <TableHeader>Nombre</TableHeader>
                <TableHeader>Apellidos</TableHeader>
                <TableHeader>Numero</TableHeader>
                <TableHeader>Hombre</TableHeader>
                <TableHeader>Mujer</TableHeader>
                <TableHeader>Grado</TableHeader>
                <TableHeader>Grupo</TableHeader>
            </TableRow>
        </thead>
    );
}

export default TableHead;
