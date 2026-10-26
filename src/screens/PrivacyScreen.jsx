import React from 'react';
import { Header } from '../atoms/Header.jsx';
import { PRIVACY_SECTIONS, PRIVACY_UPDATED } from '../content/privacy.js';

export function PrivacyScreen({ onBack }) {
  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title="Ochrana súkromia" onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-3">
        {PRIVACY_SECTIONS.map(sec => (
          <section key={sec.title} className="ks-card rounded-sm p-4">
            <h3 className="ks-display ks-cream text-lg font-semibold mb-1">{sec.title}</h3>
            <p className="ks-body ks-cream text-sm leading-relaxed opacity-90">{sec.body}</p>
          </section>
        ))}
        <p className="ks-muted text-xs px-1">Posledná aktualizácia: {PRIVACY_UPDATED}</p>
      </div>
    </div>
  );
}
