import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEME_STYLES = ['minimalist', 'glassmorphism', 'neumorphism', 'dark-modern', 'gradient-startup'] as const;
export type ThemeStyle = typeof THEME_STYLES[number];

interface ThemeContextType {
  style: ThemeStyle;
  setStyle: (style: ThemeStyle) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [style, setStyle] = useState<ThemeStyle>('minimalist');

  useEffect(() => {
    // Add theme class to body for global styling if needed
    document.body.className = `theme-${style}`;
  }, [style]);

  return (
    <ThemeContext.Provider value={{ style, setStyle }}>
      <div className={`style-${style} min-h-screen transition-all duration-700`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
