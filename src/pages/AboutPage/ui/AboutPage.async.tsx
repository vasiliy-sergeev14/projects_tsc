import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise<typeof import('./AboutPage')>((resolve) => {
    setTimeout(() => {
        resolve(import('./AboutPage'));
    }, 2000); // Задержка в 2000 миллисекунд (2 секунды)
}));