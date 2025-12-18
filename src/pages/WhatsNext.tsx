import React from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import { Map, Target, Users, Sparkles, Glasses } from 'lucide-react';

export const WhatsNext: React.FC = () => {
  const initiatives = [
    {
      icon: Map,
      title: 'New Navigation Infrastructure',
      timeline: 'Q2-Q4 2026',
      color: 'primary',
      items: [
        'OpenStreetMap (OSM) integration',
        'Sidewalk & Crosswalk detection',
        'Blind-customized navigation algorithms',
        'Last mile problem solutions',
        'Real-time path optimization',
      ],
    },
    {
      icon: Target,
      title: 'AIM to Production',
      timeline: 'Q1-Q2 2026',
      color: 'secondary',
      items: [
        'User-facing pages in mobile apps',
        'O&M professional dashboards',
        'Analytics & progress tracking',
        'Training module integration',
      ],
    },
    {
      icon: Users,
      title: 'Smart Cane for Elderly',
      timeline: 'Q3 2026',
      color: 'success',
      items: [
        'Simplified interface for seniors',
        'Fall detection & alerts',
        'Emergency contact system',
        'Battery optimization',
      ],
    },
    {
      icon: Glasses,
      title: 'SAWNS Project',
      timeline: 'BMC and Tubitak Grants',
      color: 'info',
      items: [
        'Situational Awareness Wearable',
        'Head-mounted navigation system',
        'Hands-free environment perception',
        'Advanced computer vision integration',
      ],
    },
    {
      icon: Sparkles,
      title: 'WeWALK Smart Cane V3',
      timeline: 'CES 2027 Launch',
      color: 'error',
      items: [
        'Technology feasibility studies',
        'New sensor integration (LiDAR, cameras)',
        'Advanced obstacle detection',
        'Modular design architecture',
        'Enhanced battery life (48h target)',
      ],
    },
  ];

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
        What's Next
      </Typography>

      <Box sx={{ display: 'grid', gap: 2.5, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
        {initiatives.map((item, idx) => (
          <Paper
            key={idx}
            elevation={3}
            sx={{
              p: 2.5,
              border: 2,
              borderColor: `${item.color}.main`,
              bgcolor: 'background.paper',
              transition: 'all 0.3s',
              '&:hover': {
                elevation: 6,
                transform: 'translateY(-2px)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <item.icon size={24} style={{ color: `var(--mui-palette-${item.color}-main)` }} />
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.3 }}>
                  {item.title}
                </Typography>
                <Chip
                  label={item.timeline}
                  size="small"
                  sx={{
                    mt: 0.5,
                    fontSize: '0.7rem',
                    height: 20,
                    bgcolor: `${item.color}.main`,
                    color: item.color === 'secondary' ? 'black' : 'white',
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
              {item.items.map((subItem, subIdx) => (
                <Box
                  key={subIdx}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1,
                    p: 1,
                    bgcolor: 'action.hover',
                    borderRadius: 0.5,
                    borderLeft: 2,
                    borderColor: `${item.color}.main`,
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: `${item.color}.main`,
                      fontWeight: 700,
                      fontSize: '0.875rem',
                      mt: 0.25,
                    }}
                  >
                    •
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.4 }}>
                    {subItem}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};
