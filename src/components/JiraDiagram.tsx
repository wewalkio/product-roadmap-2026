import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export const JiraDiagram: React.FC = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
        border: 1,
        borderColor: 'divider',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          textTransform: 'uppercase',
          letterSpacing: 2,
          color: 'text.secondary',
          mb: 4,
          fontSize: '0.75rem',
        }}
      >
        Jira Hierarchy Mapping
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 400, position: 'relative', zIndex: 1 }}>
        {/* Initiative 1 */}
        <Box
          sx={{
            width: '100%',
            p: 2,
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
            borderRadius: 2,
            textAlign: 'center',
            fontWeight: 700,
            boxShadow: 2,
            position: 'relative',
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        >
          Initiative (2026 Pillar)
          <Box sx={{ position: 'absolute', left: '50%', bottom: -32, width: 2, height: 32, bgcolor: 'primary.main', ml: -0.25 }} />
        </Box>

        {/* Initiative 2 */}
        <Box
          sx={{
            width: '90%',
            p: 1.5,
            mt: 4,
            bgcolor: 'background.paper',
            border: 2,
            borderColor: 'primary.main',
            color: 'primary.main',
            borderRadius: 1.5,
            textAlign: 'center',
            fontWeight: 600,
            boxShadow: 1,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Initiative (Quarter Theme)
          <Box sx={{ position: 'absolute', left: '50%', bottom: -32, width: 2, height: 32, bgcolor: 'divider', ml: -0.25 }} />
        </Box>

        {/* Epic */}
        <Box
          sx={{
            width: '80%',
            p: 1.5,
            mt: 4,
            bgcolor: 'background.paper',
            border: 1,
            borderColor: 'divider',
            color: 'text.primary',
            borderRadius: 1.5,
            textAlign: 'center',
            fontWeight: 500,
            boxShadow: 1,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Epic
          <Box sx={{ position: 'absolute', left: '50%', bottom: -32, width: 2, height: 32, bgcolor: 'divider', ml: -0.25 }} />
        </Box>

        {/* Stories / Tasks */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mt: 4, width: '80%' }}>
          <Box
            sx={{
              p: 1.5,
              bgcolor: 'action.hover',
              border: 1,
              borderColor: 'divider',
              borderRadius: 1.5,
              textAlign: 'center',
              color: 'text.secondary',
              fontSize: '0.875rem',
              boxShadow: 1,
            }}
          >
            Story
          </Box>
          <Box
            sx={{
              p: 1.5,
              bgcolor: 'action.hover',
              border: 1,
              borderColor: 'divider',
              borderRadius: 1.5,
              textAlign: 'center',
              color: 'text.secondary',
              fontSize: '0.875rem',
              boxShadow: 1,
            }}
          >
            Task
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 'auto', pt: 4, display: 'flex', gap: 1.5, fontSize: '0.625rem', color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Typography component="span" sx={{ fontWeight: 700, color: 'text.disabled', fontSize: 'inherit' }}>
          Required Fields:
        </Typography>
        <Typography component="span" sx={{ fontSize: 'inherit' }}>
          Pillar • Quarter • Owner • Confidence • Kill Criteria
        </Typography>
      </Box>
    </Paper>
  );
};
