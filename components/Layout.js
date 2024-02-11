import { Box, Container } from "@mui/material"
import { Header } from "./Header"

export default function Layout({ children }) {
    return (
        <Box sx={{ height: '100vh' }}>
            <Header />
            <Container sx={{ marginTop: '2rem' }}>
                {children}
            </Container>
        </Box>
    )
}