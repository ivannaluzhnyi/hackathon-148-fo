import { createContext, useContext } from 'react';

export const InscriptionContext = createContext<any>({});

export const InscriptionContextProvider = InscriptionContext.Provider;

export const useInscription = useContext(InscriptionContext);
