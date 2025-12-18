import { useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { RevealPresentation } from './components/RevealPresentation';
import { Slide } from './components/Slide';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { createAppTheme } from './theme/muiTheme';
import { WelcomePage } from './pages/WelcomePage';
import { VoiceAssistant } from './pages/VoiceAssistant';
import { Achievements2025 } from './pages/Achievements2025';
import { Overview } from './pages/Overview';
import { Focus2026 } from './pages/Focus2026';
import { WhatsNext } from './pages/WhatsNext';

// Inner component that uses the theme
function AppContent() {
  const { theme } = useTheme();
  const muiTheme = useMemo(() => createAppTheme(theme), [theme]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <RevealPresentation>
        <Slide>
          <WelcomePage />
        </Slide>
        <Slide title="Voice Assistant 2.0">
          <VoiceAssistant />
        </Slide>
        <Slide title="2025: Achievements & Challenges">
          <Achievements2025 />
        </Slide>
        <Slide title="2026 Focus: Removing Barriers">
          <Focus2026 />
        </Slide>
        <Slide title="What's Next">
          <WhatsNext />
        </Slide>
        <Slide title="2025 Roadmap Details (Backup)">
          <Overview />
        </Slide>
      </RevealPresentation>
    </MuiThemeProvider>
  );
}

// Main App component wrapped with ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
