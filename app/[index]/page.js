"use client"
import Layout from "@/components/Layout"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PreviewIcon from '@mui/icons-material/Preview';
import { enfield, mn, regency, valencia } from "@/files";
import Details from "@/components/Details";

const Detail = ({ params }) => {
    let data = [], title = ''
    const slug = +params.index;

    if (slug === 2) {
        data = regency
        title = 'Regency'
    }
    if (slug === 1) {
        data = valencia
        title = 'Валенсия'
    }
    if (slug === 3) {
        data = enfield
        title = 'Enfield'
    }
    if (slug === 4) {
        data = mn
        title = 'Muras Nuru'
    }
    return (
        <Layout>
            <TableContainer component={Paper}>
                <Details title={title} data={data} />
            </TableContainer>
        </Layout>
    )
}

export default Detail
