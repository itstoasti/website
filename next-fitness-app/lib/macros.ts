```typescript
type Macro = {
  id: string;
  name: string;
  amount: number;
};

let macros: Macro[] = [];

export function getMacros(): Macro[] {
  return macros;
}

export function getMacro(id: string): Macro | undefined {
  return macros.find(macro => macro.id === id);
}

export function addMacro(macro: Macro): void {
  macros.push(macro);
}

export function updateMacro(id: string, updatedMacro: Macro): void {
  const index = macros.findIndex(macro => macro.id === id);
  if (index !== -1) {
    macros[index] = updatedMacro;
  }
}

export function deleteMacro(id: string): void {
  macros = macros.filter(macro => macro.id !== id);
}
```