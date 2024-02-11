import { Box, Button, Container } from "@mui/material"
import Image from "next/image"

export const Header = () => {
    return (
        <div class="header">
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <a href="/">
                        <Image src={'/logo.webp'} width={190} height={39}
                            objectFit="cover" />
                    </a>
                    <div class="header-right">
                        <Button size="small" href="#about">Log out</Button>
                    </div>
                </Box>
            </Container>
        </div>
    )
}