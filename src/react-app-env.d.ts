/// <reference types="react-scripts" />

declare module 'Types' {
    import React from 'react';
    export type InputEvent = React.FormEvent<HTMLInputElement>;
    export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
    export type SelectEvent = React.ChangeEvent<HTMLSelectElement>;
    export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

    // export interface
}
