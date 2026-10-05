import React, { useRef } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { useFocusTrap } from '../useFocusTrap.js';
import { getActiveFocusScope } from '../focusScope.js';

function Dialog({ label = 'Graf', empty = false }) {
  const ref = useRef(null);
  useFocusTrap(ref);
  return <div ref={ref} role="dialog" aria-label={label} tabIndex={-1}>
    {!empty && <><button>Zatvoriť {label}</button><button>Posunúť {label}</button></>}
  </div>;
}

beforeEach(() => {
  // jsdom has no layout: make the tested controls visible to the shared DOM utility.
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({ width: 100, height: 44 });
  vi.spyOn(HTMLElement.prototype, 'offsetParent', 'get').mockReturnValue(document.body);
});
afterEach(() => { cleanup(); document.body.innerHTML = ''; vi.restoreAllMocks(); });

describe('dialog focus for keyboard and TV', () => {
  it('enters the graph, cycles Tab in both directions, and restores its opener', () => {
    const opener = document.createElement('button');
    document.body.append(opener); opener.focus();
    const view = render(<Dialog />);
    const close = screen.getByText('Zatvoriť Graf');
    const scroll = screen.getByText('Posunúť Graf');
    expect(close).toHaveFocus();
    fireEvent.keyDown(close, { key: 'Tab', shiftKey: true });
    expect(scroll).toHaveFocus();
    fireEvent.keyDown(scroll, { key: 'Tab' });
    expect(close).toHaveFocus();
    view.unmount();
    expect(opener).toHaveFocus();
    expect(getActiveFocusScope()).toBeNull();
  });

  it('rejects focus on the hidden recording panel underneath the graph', () => {
    const underlying = document.createElement('button');
    document.body.append(underlying);
    render(<Dialog />);
    underlying.focus();
    expect(screen.getByText('Zatvoriť Graf')).toHaveFocus();
  });

  it('keeps an empty dialog focusable and prevents Tab escaping', () => {
    render(<Dialog empty />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveFocus();
    expect(fireEvent.keyDown(dialog, { key: 'Tab' })).toBe(false);
    expect(dialog).toHaveFocus();
  });

  it('hands scope and focus back to the underlying dialog after closing a nested one', () => {
    const base = render(<Dialog label="Pravidlá" />);
    const opener = screen.getByText('Posunúť Pravidlá'); opener.focus();
    const nested = render(<Dialog label="Graf" />);
    expect(screen.getByText('Zatvoriť Graf')).toHaveFocus();
    expect(getActiveFocusScope()).toBe(screen.getByRole('dialog', { name: 'Graf' }));
    nested.unmount();
    expect(opener).toHaveFocus();
    expect(getActiveFocusScope()).toBe(screen.getByRole('dialog', { name: 'Pravidlá' }));
    base.unmount();
  });
});
