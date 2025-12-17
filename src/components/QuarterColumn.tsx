import React, { useState } from 'react';
import { Box, Typography, Collapse, Paper } from '@mui/material';
import { motion } from 'framer-motion';

interface QuarterColumnProps {
  quarter: string;
  title: string;
  items: string[];
  color?: string;
}

export const QuarterColumn: React.FC<QuarterColumnProps> = ({ quarter, title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <Paper
      component={motion.div}
      layout
      onClick={handleClick}
      elevation={isOpen ? 6 : 2}
      sx={{
        p: 2,
        cursor: 'pointer',
        border: 1,
        borderColor: isOpen ? 'primary.main' : 'divider',
        minHeight: isOpen ? 160 : 100,
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s',
        '&:hover': {
          borderColor: 'primary.main',
          elevation: 4,
        },
      }}
    >
      <Box sx={{ mb: isOpen ? 2 : 1, pb: isOpen ? 1.5 : 1, borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          variant="caption"
          sx={{
            color: 'primary.main',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 1.5,
            display: 'block',
            mb: 0.25,
            fontSize: '0.7rem',
          }}
        >
          {quarter}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.1rem', lineHeight: 1.3 }}>
          {title}
        </Typography>
      </Box>

      <Collapse in={isOpen} sx={{ flex: 1 }}>
        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
          {items.map((item, idx) => (
            <Box
              component={motion.li}
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1,
                mb: 1,
              }}
            >
              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  bgcolor: 'primary.main',
                  mt: 0.75,
                  flexShrink: 0,
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.4, fontSize: '0.9rem' }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Collapse>

      {!isOpen && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            opacity: 0.4,
          }}
        >
          <Box sx={{ width: 24, height: 3, bgcolor: 'text.disabled', borderRadius: 1, mb: 0.5 }} />
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.65rem' }}>
            Expand
          </Typography>
        </Box>
      )}
    </Paper>
  );
};
