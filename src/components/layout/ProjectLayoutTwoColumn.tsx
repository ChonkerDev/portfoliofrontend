import React from 'react';
import { Box, Typography, Link } from '@mui/material';

interface ProjectLayoutProps {
    title: string;
    storeLink?: string;
    left: React.ReactNode;
    right: React.ReactNode;
}

const ProjectLayoutTwoColumn: React.FC<ProjectLayoutProps> = ({ title, storeLink, left, right }) => {
    return (
        <Box sx={{ padding: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
            <Typography variant="h4" component="h2" gutterBottom>
                {title}
            </Typography>

            {storeLink && (
                <Typography variant="body2" gutterBottom>
                    Storepage:{' '}
                    <Link href={storeLink} target="_blank" rel="noopener">
                        {storeLink}
                    </Link>
                </Typography>
            )}

            <Box sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <Box sx={{ flex: 1, minWidth: '300px' }}>{left}</Box>
                <Box sx={{ flex: 1, minWidth: '300px' }}>{right}</Box>
            </Box>
        </Box>
    );
};

export default ProjectLayoutTwoColumn;