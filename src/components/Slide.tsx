import React from 'react';
import { Box, Typography } from '@mui/material';

interface SlideProps {
  children: React.ReactNode;
  title?: string;
}

export const Slide: React.FC<SlideProps> = ({ children, title }) => {
  return (
    <section>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          p: { xs: 2, sm: 3, md: 4 },
          overflow: 'hidden',
        }}
      >
        {title && (
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ 
              mb: { xs: 2, md: 3 },
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
              fontWeight: 600,
              borderBottom: 2,
              borderColor: 'primary.main',
              pb: 1,
              flexShrink: 0,
            }}
          >
            {title}
          </Typography>
        )}
        <Box 
          sx={{ 
            flex: 1, 
            overflow: 'auto',
            minHeight: 0,
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(255,255,255,0.1)',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(255,255,255,0.3)',
              borderRadius: '4px',
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </section>
  );
};
