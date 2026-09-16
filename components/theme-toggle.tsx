'use client';

import { useEffect, useState } from 'react';

type ThemePreference = 'system' | 'light' | 'dark';

const cycle: ThemePreference[] = ['system', 'light', 'dark'];
const labels: Record<ThemePreference, string> = {
  system: 'sistema',
  light: 'claro',
  dark: 'escuro',
};

function applyTheme(theme: ThemePreference) {
  if (theme === 'system') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('ba-theme');
    return;
  }

  document.documentElement.dataset.theme = theme;
  localStorage.setItem('ba-theme', theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemePreference>('system');

  useEffect(() => {
    const saved = localStorage.getItem('ba-theme');
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
      queueMicrotask(() => setTheme(saved));
    }
  }, []);

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Tema atual: ${labels[theme]}. Alterar tema.`}
      title={`Tema: ${labels[theme]}`}
      onClick={() => {
        const next = cycle[(cycle.indexOf(theme) + 1) % cycle.length];
        setTheme(next);
        applyTheme(next);
      }}
    >
      <span aria-hidden="true">
        {theme === 'system' ? 'Auto' : theme === 'light' ? 'Claro' : 'Escuro'}
      </span>
    </button>
  );
}
