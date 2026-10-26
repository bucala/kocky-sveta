// Vlastné dialógy namiesto window.alert / confirm / prompt.
// Vyzerajú podľa skinu, dajú sa ovládať ovládačom (focus trap) a tlačidlo
// Späť ich zavrie ako „Zrušiť“. Volanie je asynchrónne:
//   await showAlert('Hotovo.')
//   if (await showConfirm('Vymazať?', { confirmLabel: 'Vymazať', danger: true })) …
import React, { useEffect, useRef, useState } from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import { useFocusTrap } from '../hooks/useFocusTrap.js';
import { useBackHandler } from '../hooks/useBackHandler.js';

let listener = null;
let nextId = 1;
const queue = [];

function enqueue(dialog) {
  return new Promise((resolve) => {
    queue.push({ ...dialog, id: nextId++, resolve });
    listener?.();
  });
}

export function showAlert(message, opts = {}) {
  return enqueue({ kind: 'alert', message, title: opts.title, okLabel: opts.okLabel || 'OK' });
}

export function showConfirm(message, opts = {}) {
  return enqueue({
    kind: 'confirm',
    message,
    title: opts.title,
    confirmLabel: opts.confirmLabel || 'Áno',
    cancelLabel: opts.cancelLabel || 'Zrušiť',
    danger: !!opts.danger,
    // nevratné akcie: potvrdzovacie tlačidlo treba ťuknúť dvakrát
    doubleTap: !!opts.doubleTap,
  });
}

function DialogBox({ dialog, onClose }) {
  const ref = useRef(null);
  const [armed, setArmed] = useState(false);
  useFocusTrap(ref);
  useBackHandler(() => onClose(false));

  const isConfirm = dialog.kind === 'confirm';
  const Icon = dialog.danger ? AlertTriangle : Info;

  function confirm() {
    if (dialog.doubleTap && !armed) { setArmed(true); return; }
    onClose(true);
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-5"
         style={{ background: 'var(--ks-modal-overlay, rgba(0,0,0,0.7))' }}>
      <div ref={ref} role={isConfirm ? 'alertdialog' : 'dialog'} aria-modal="true"
           aria-label={dialog.title || (isConfirm ? 'Potvrdenie' : 'Správa')}
           className="ks-card ks-dialog rounded-sm border-2 ks-border-accent w-full max-w-sm p-5 shadow-2xl">
        <div className="flex items-start gap-3">
          <Icon size={22} className={`${dialog.danger ? 'ks-text-accent' : 'ks-gold'} shrink-0 mt-0.5`} />
          <div className="min-w-0 flex-1">
            {dialog.title && <div className="ks-display ks-cream text-xl font-semibold mb-1">{dialog.title}</div>}
            <div className="ks-body ks-cream text-sm leading-relaxed whitespace-pre-line break-words">{dialog.message}</div>
          </div>
        </div>
        <div className={`mt-5 grid gap-2 ${isConfirm ? 'grid-cols-2' : 'grid-cols-1'}`}>
          {isConfirm && (
            <button type="button" onClick={() => onClose(false)}
              className="ks-press py-2.5 rounded-sm border ks-border-sub ks-cream ks-mono text-sm">
              {dialog.cancelLabel}
            </button>
          )}
          <button type="button" onClick={isConfirm ? confirm : () => onClose(true)}
            className={`ks-press py-2.5 rounded-sm ks-mono text-sm font-semibold ${dialog.danger ? 'border-2 border-red-800/70 bg-red-950/50 ks-text-accent' : 'ks-gold-bg'}`}>
            {isConfirm ? (armed ? 'Ťukni znova' : dialog.confirmLabel) : dialog.okLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// Umiestni sa raz v koreni aplikácie.
export function DialogHost() {
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    listener = () => setCurrent((cur) => cur || queue[0] || null);
    listener();
    return () => { listener = null; };
  }, []);

  if (!current) return null;
  return (
    <DialogBox
      key={current.id}
      dialog={current}
      onClose={(value) => {
        queue.shift();
        current.resolve(current.kind === 'alert' ? undefined : value);
        setCurrent(queue[0] || null);
      }}
    />
  );
}
