import { signal } from "@preact/signals-react";

export function createAppState() {
    const consents = signal([{email: 'a.b@c.com', name: 'a b', selectedProcesses: '1'}]);
    return { consents }
  }