import React from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import { CheckCircle2, AlertCircle, Bluetooth, Navigation, Shield, Volume2, TrendingDown } from 'lucide-react';

export const Achievements2025: React.FC = () => {
  const achievements = [
    { icon: Bluetooth, title: 'Bluetooth Problems', status: 'Fixed', color: 'success' },
    { icon: Navigation, title: 'Navigation Improvements', status: 'Done & Ongoing', color: 'primary' },
    { icon: Shield, title: 'Obstacle Detection Challenges', status: 'False Detection Solved', color: 'success' },
    { icon: Volume2, title: 'Sound Related Issues', status: 'Fixed (HW + SW)', color: 'success' },
  ];

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
        2025: What We Achieved
      </Typography>

      {/* Achievements Grid */}
      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, mb: 4 }}>
        {achievements.map((item, idx) => (
          <Paper
            key={idx}
            elevation={2}
            sx={{
              p: 2.5,
              border: 1,
              borderColor: 'divider',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2,
            }}
          >
            <CheckCircle2 size={28} style={{ color: '#4caf50', flexShrink: 0 }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 600, mb: 0.5 }}>
                {item.title}
              </Typography>
              <Chip
                label={item.status}
                size="small"
                sx={{
                  fontSize: '0.75rem',
                  bgcolor: item.color === 'success' ? '#4caf50' : 'primary.main',
                  color: 'white',
                }}
              />
            </Box>
          </Paper>
        ))}
      </Box>

      {/* Challenge */}
      <Paper
        elevation={4}
        sx={{
          p: 3,
          border: 2,
          borderColor: 'warning.main',
          bgcolor: 'background.paper',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <AlertCircle size={32} style={{ color: '#ff9800' }} />
          <Typography variant="h5" sx={{ fontWeight: 600, color: 'warning.main' }}>
            What We Couldn't Solve
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <TrendingDown size={24} style={{ color: '#9aa0a6' }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            User Engagement & Retention
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Despite technical achievements, user engagement metrics remain a challenge:
        </Typography>

        <Box
          sx={{
            mt: 2,
            p: 2,
            bgcolor: 'action.hover',
            borderRadius: 1,
            borderLeft: 4,
            borderColor: 'warning.main',
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            📊 Analytics Dashboard
          </Typography>
          <Typography
            component="a"
            href="https://app.amplitude.com/analytics/wewalk/chart/iktqax1y/edit/ce4cvbdq"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              fontSize: '0.875rem',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            View Engagement Metrics →
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};
