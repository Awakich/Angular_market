import { effect, signal } from "@angular/core";

export const localStorageSignal = <T>(key: string, initialValue: T) => {
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : JSON.parse(JSON.stringify(initialValue));

  const signalValue = signal(parsedValue)

  effect(() => {
    localStorage.setItem(key, JSON.stringify(signalValue()));
  })

  return signalValue;
}
