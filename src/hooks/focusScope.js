// src/hooks/focusScope.js
// LIFO zásobník aktívnych "focus scope" koreňov (otvorené modaly/popupy).
// Kým je scope aktívny, D-pad navigácia (useDpadNavigation.js) hľadá
// focusovateľné prvky LEN v jeho rámci — focus tak nemôže "ujsť" do
// obsahu pod modalom.
const stack = [];

export function pushFocusScope(root) {
  stack.push(root);
  return () => {
    const idx = stack.lastIndexOf(root);
    if (idx !== -1) stack.splice(idx, 1);
  };
}

/** Vráti koreňový element aktuálne najvrchnejšieho scope, alebo null. */
export function getActiveFocusScope() {
  return stack.length > 0 ? stack[stack.length - 1] : null;
}
