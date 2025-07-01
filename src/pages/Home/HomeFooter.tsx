import { Box, Typography } from '@mui/material';

export default function HomeFooter() {
    return (
        <Box sx={{ mt: 8, textAlign: 'center', opacity: 0.7 }}>
            <Typography variant="body2">
                Made with <strong>Vite</strong> + <strong>React</strong> + <strong>TypeScript</strong>.
            </Typography>
        </Box>
    );
}