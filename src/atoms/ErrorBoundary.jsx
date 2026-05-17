import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          minHeight: '100dvh', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', padding: '24px',
          background: '#0e0c0a', color: '#f3ead4', fontFamily: 'sans-serif', textAlign: 'center',
        }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🎲</div>
          <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: '#d4b86a' }}>
            Nastala neočakávaná chyba
          </div>
          <div style={{ fontSize: 13, color: '#a89679', marginBottom: 24, maxWidth: 320 }}>
            {this.state.error?.message || 'Neznáma chyba'}
          </div>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 28px', borderRadius: 4, border: 'none', cursor: 'pointer',
              background: '#d4b86a', color: '#1a1410', fontWeight: 700, fontSize: 14,
            }}
          >
            Znova načítať
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
