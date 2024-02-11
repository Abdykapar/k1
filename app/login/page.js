import { Box, Button, TextField, Card } from "@mui/material";
import './login.css'

export default function Login() {
    return (
        <main className="form__content">
            <Card>
                <form className="form">
                    <h3>Sign in to the page</h3>

                    <TextField
                        size="medium"
                        required
                        label="Username"
                    />
                    <TextField
                        required
                        size="medium"
                        label="Password"
                        type="password"
                    />

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button color="success" variant="contained">Login</Button>
                    </Box>

                </form>
            </Card>
        </main>
    );
}
