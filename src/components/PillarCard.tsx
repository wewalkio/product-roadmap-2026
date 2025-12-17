import React, { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Box, Typography, Collapse, Paper } from '@mui/material';
import { motion } from 'framer-motion';

interface PillarCardProps {
  number: string;
  title: string;
  icon: LucideIcon;
  description?: string;
  color?: string;
}

export const PillarCard: React.FC<PillarCardProps> = ({ number, title, icon: Icon, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent Reveal.js interference
    setIsOpen(!isOpen);
  };

  return (
    <Paper
      component={motion.div}
      layout
      onClick={handleClick}
      elevation={2}
      sx={{
        p: 2.5,
        cursor: 'pointer',
        border: 1,
        borderColor: 'divider',
        transition: 'all 0.3s',
        '&:hover': {
          borderColor: 'primary.main',
          elevation: 4,
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
        <Icon style={{ width: 28, height: 28, color: 'var(--mui-palette-primary-main)' }} />
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.125rem', flex: 1 }}>
          {title}
        </Typography>
      </Box>

      <Typography
        variant="caption"
        sx={{
          color: 'text.secondary',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: 1.5,
          display: 'block',
          mb: 1,
        }}
      >
        {number}
      </Typography>

      <Collapse in={isOpen}>
        {description && (
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1.5, lineHeight: 1.6 }}>
            {description}
          </Typography>
        )}
      </Collapse>

      {!isOpen && (
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            color: 'primary.main',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 1,
            fontSize: '0.75rem',
            mt: 1,
            opacity: 0.7,
            transition: 'opacity 0.3s',
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          Read More
        </Typography>
      )}
    </Paper>
  );
};
