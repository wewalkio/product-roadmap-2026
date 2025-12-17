import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Key, Zap } from 'lucide-react';

export const Focus2026: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
        2026 Focus
      </Typography>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: 'primary.main' }}>
        Removing Barriers
      </Typography>

      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
        {/* Passkeys */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            border: 2,
            borderColor: 'primary.main',
            bgcolor: 'background.paper',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Key size={24} style={{ color: 'white' }} />
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', fontWeight: 600 }}>
                Example 1
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Easier Login
              </Typography>
            </Box>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
            Passkeys Implementation
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                ✓ No more passwords
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                Biometric authentication (Face ID, Touch ID)
              </Typography>
            </Box>

            <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                ✓ One-tap login
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                Seamless, secure, accessible
              </Typography>
            </Box>

            <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                ✓ Industry standard
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                FIDO2/WebAuthn compliance
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Activation */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            border: 2,
            borderColor: 'secondary.main',
            bgcolor: 'background.paper',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: 'secondary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Zap size={24} style={{ color: 'black' }} />
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', fontWeight: 600 }}>
                Example 2
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Simpler Activation
              </Typography>
            </Box>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}>
            Streamlined Onboarding
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                ✓ Reduced steps
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                From 8 steps to 3 steps
              </Typography>
            </Box>

            <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                ✓ Auto-detection
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                Automatic device pairing & configuration
              </Typography>
            </Box>

            <Box sx={{ p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                ✓ Clear guidance
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                Voice-guided setup process
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box sx={{ mt: 3, p: 2.5, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 1, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Goal: Reduce Time-to-Value from Days to Minutes
        </Typography>
      </Box>
    </Box>
  );
};
