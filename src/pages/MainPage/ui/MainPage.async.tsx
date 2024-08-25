import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise<typeof import('./MainPage')>((resolve) => {
    setTimeout(() => {
        resolve(import('./MainPage'));
    }, 2000); // Задержка в 2000 миллисекунд (2 секунды)
}));