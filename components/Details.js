import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PreviewIcon from '@mui/icons-material/Preview';
import { regency } from "@/files";
import Link from "next/link";

export default function Details({ title, data }) {
    return (<Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>{title}</TableCell>
                <TableCell align="right">Documents</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">
                        <Link href={row.url} target="_blank">
                            <PreviewIcon />
                        </Link>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>)
}