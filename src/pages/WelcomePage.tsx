import React from 'react';
import { Box, Typography } from '@mui/material';

export const WelcomePage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        gap: 4,
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            fontWeight: 800,
            background: 'linear-gradient(45deg, #1a73e8 30%, #8ab4f8 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 1,
            lineHeight: 1.1,
          }}
        >
          WeWALK
          <br />
          Product & Innovation
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '2.5rem' },
            fontWeight: 600,
            color: 'text.primary',
            mb: 1,
            mt: 2,
          }}
        >
          Q4 2025 Presentation
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: '1rem', md: '1.5rem' },
            fontWeight: 400,
            color: 'text.secondary',
          }}
        >
          18.12.2025
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
          Press → or click to continue
        </Typography>
      </Box>
    </Box>
  );
};
