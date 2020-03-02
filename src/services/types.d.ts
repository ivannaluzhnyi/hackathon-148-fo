/// <reference types="react-scripts" />

declare module 'Types' {
    export type Services = typeof import('./index').default;
}
