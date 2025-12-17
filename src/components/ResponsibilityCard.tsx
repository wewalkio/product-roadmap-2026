import React, { useState } from 'react';
import { Box, Typography, Collapse, Paper } from '@mui/material';
import { motion } from 'framer-motion';

interface ResponsibilityCardProps {
  role: string;
  items: string[];
}

export const ResponsibilityCard: React.FC<ResponsibilityCardProps> = ({ role, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent Reveal.js from intercepting
    setIsOpen(!isOpen);
  };

  return (
    <Paper
      component={motion.div}
      layout
      onClick={handleClick}
      elevation={isOpen ? 8 : 2}
      sx={{
        p: 2.5,
        cursor: 'pointer',
        border: 2,
        borderColor: isOpen ? 'primary.main' : 'divider',
        transition: 'all 0.3s',
        bgcolor: isOpen ? 'action.hover' : 'background.paper',
        '&:hover': {
          borderColor: 'primary.main',
          elevation: 4,
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: isOpen ? 1.5 : 0.5 }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: 'primary.main',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: 1,
            fontSize: '0.8rem',
          }}
        >
          {role}
        </Typography>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <Typography sx={{ color: isOpen ? 'primary.main' : 'text.secondary', fontWeight: 700, fontSize: '1.2rem' }}>▼</Typography>
        </motion.div>
      </Box>

      <Collapse in={isOpen}>
        <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, mt: 1 }}>
          {items.map((item, idx) => (
            <Box
              component={motion.li}
              key={idx}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              sx={{
                py: 0.5,
                pl: 1.5,
                borderLeft: 3,
                borderColor: 'primary.main',
                mb: 0.75,
                bgcolor: 'background.paper',
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.primary', fontSize: '0.875rem', fontWeight: 500 }}>
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
            textAlign: 'center',
            color: 'text.disabled',
            textTransform: 'uppercase',
            letterSpacing: 2,
            fontSize: '0.65rem',
            mt: 1,
            opacity: 0.6,
          }}
        >
          Click to View
        </Typography>
      )}
    </Paper>
  );
};
