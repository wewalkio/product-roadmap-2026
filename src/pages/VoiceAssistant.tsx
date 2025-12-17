import React from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import { Mic, Sparkles, Smartphone, Activity } from 'lucide-react';

export const VoiceAssistant: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 700 }}>
        Voice Assistant 2.0
      </Typography>

      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
        {/* Launching Soon */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            border: 2,
            borderColor: 'primary.main',
            bgcolor: 'background.paper',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Sparkles size={32} style={{ color: 'var(--mui-palette-primary-main)' }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Launching Q1 2026
              </Typography>
              <Chip label="New Year Release" color="primary" size="small" sx={{ mt: 0.5 }} />
            </Box>
          </Box>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
            New voice assistant powered by our agent-based infrastructure
          </Typography>
          <Box sx={{ bgcolor: 'action.hover', p: 2, borderRadius: 1, mt: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
              Built on Google Gemini
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Advanced AI capabilities with natural language understanding
            </Typography>
          </Box>
          <Box sx={{ mt: 2, p: 1.5, bgcolor: 'secondary.main', color: 'secondary.contrastText', borderRadius: 1, textAlign: 'center' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              ⭐ Live Demo Session Included
            </Typography>
          </Box>
        </Paper>

        {/* The Future: WeWALK Assistant */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            border: 1,
            borderColor: 'divider',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Mic size={32} style={{ color: 'var(--mui-palette-secondary-main)' }} />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              The Future: WeWALK Assistant
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
            A unified assistant accessible across the entire ecosystem
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {[
              { icon: Activity, label: 'Smart Cane', desc: 'Trigger via hardware button' },
              { icon: Smartphone, label: 'Mobile App', desc: 'Always available in-app' },
              { icon: Activity, label: 'SAWNS Headset', desc: 'Head-mounted wearable integration' },
              { icon: Sparkles, label: 'Any Device', desc: 'Ecosystem-wide accessibility' },
            ].map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  p: 1.5,
                  bgcolor: 'action.hover',
                  borderRadius: 1,
                  borderLeft: 3,
                  borderColor: 'secondary.main',
                }}
              >
                <item.icon size={20} style={{ color: 'var(--mui-palette-secondary-main)' }} />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    {item.label}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
