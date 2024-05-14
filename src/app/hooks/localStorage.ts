import { effect, signal } from "@angular/core";

export const localStorageSignal = (key: string, initialValue: any) => {
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const signalValue = signal(parsedValue)

  effect(() => {
    localStorage.setItem(key, JSON.stringify(signalValue()));
  })

  return signalValue;
}
