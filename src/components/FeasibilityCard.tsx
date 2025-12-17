import React, { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Box, Typography, Collapse, Paper } from '@mui/material';
import { motion } from 'framer-motion';

interface FeasibilityCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
}

export const FeasibilityCard: React.FC<FeasibilityCardProps> = ({ title, items, icon: Icon }) => {
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
        p: 2.5,
        cursor: 'pointer',
        border: 1,
        borderColor: isOpen ? 'secondary.main' : 'divider',
        transition: 'all 0.3s',
        '&:hover': {
          borderColor: 'secondary.main',
          elevation: 4,
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
        <Icon size={26} style={{ color: 'var(--mui-palette-secondary-main)' }} />
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1.05rem' }}>
          {title}
        </Typography>
      </Box>

      <Collapse in={isOpen}>
        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mt: 0.5 }}>
          {items.map((item, idx) => (
            <Box
              component={motion.li}
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1,
                mb: 0.75,
                position: 'relative',
                pl: 1.5,
              }}
            >
              <Typography
                component="span"
                sx={{
                  position: 'absolute',
                  left: 0,
                  color: 'secondary.main',
                  fontWeight: 700,
                  fontSize: '1rem',
                }}
              >
                •
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.4, fontSize: '0.9rem' }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Collapse>

      {!isOpen && (
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 2,
            pt: 1.5,
            textAlign: 'center',
            color: 'text.disabled',
            fontSize: '0.7rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: 1.5,
          }}
        >
          Explore Options
        </Typography>
      )}
    </Paper>
  );
};
