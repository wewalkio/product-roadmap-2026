import React, { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import '../reveal-custom.css';
import { Box } from '@mui/material';

interface RevealPresentationProps {
  children: React.ReactNode;
}

export const RevealPresentation: React.FC<RevealPresentationProps> = ({ children }) => {
  const deckRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current && !revealRef.current) {
      const deck = new Reveal(deckRef.current, {
        // Presentation size
        width: 1280,
        height: 720,
        margin: 0.1,
        minScale: 0.2,
        maxScale: 2.0,
        
        // Display controls - arrows on edges
        controls: true,
        controlsLayout: 'edges',
        controlsBackArrows: 'visible',
        
        // Progress bar
        progress: true,
        
        // Slide number
        slideNumber: 'c/t',
        
        // Keyboard navigation
        keyboard: true,
        
        // Touch navigation
        touch: true,
        
        // Loop
        loop: false,
        
        // Center slides
        center: false,
        
        // Transitions
        transition: 'slide',
        transitionSpeed: 'default',
        
        // Background
        backgroundTransition: 'fade',
        
        // Enable auto-scaling
        disableLayout: false,
      });

      deck.initialize().then(() => {
        revealRef.current = deck;
      });

      return () => {
        if (revealRef.current) {
          revealRef.current.destroy();
          revealRef.current = null;
        }
      };
    }
  }, []);

  return (
    <Box
      ref={deckRef}
      className="reveal"
      sx={{
        width: '100vw',
        height: '100vh',
        '& .slides': {
          textAlign: 'left',
        },
        '& .slides > section': {
          height: '100%',
          padding: 0,
        },
      }}
    >
      <div className="slides">{children}</div>
    </Box>
  );
};
