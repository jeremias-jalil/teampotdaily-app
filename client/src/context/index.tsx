import React, { createContext, useContext, useState } from 'react';
import { SCREENS_ENUM } from '../utils/enum';


export interface IGlobalContextData {
    loading: boolean;
    screen: SCREENS_ENUM;
}

const defaultGlobalContextData: IGlobalContextData = {
    loading: false,
    screen: SCREENS_ENUM.HOME,

};
export interface IGlobalContext {
    data: IGlobalContextData;
    updateLoading: (loading: boolean) => void;
    updateScreen: (screen: SCREENS_ENUM) => void;
}

interface IGlobalProviderProps {
    children?: React.ReactNode;
}

const GlobalContext = createContext<IGlobalContext>({
    data: defaultGlobalContextData,
    updateLoading: () => { },
    updateScreen: () => { }
});

export const GlobalProvider: React.FC<IGlobalProviderProps> = ({
    children
}) => {
    const [providerValue, setProviderValue] = useState(defaultGlobalContextData);

    const updateLoading = (loading: boolean): void => {
        setProviderValue((prevValues) => {
            return { ...prevValues, loading };
        });
    };

    const updateScreen = (screen: SCREENS_ENUM): void => {
        setProviderValue((prevValues) => {
            return { ...prevValues, screen };
        });
    }



    const providerData = {
        data: providerValue,
        updateLoading,
        updateScreen,

    };


    return (
        <GlobalContext.Provider value={providerData}>
            {children}
        </GlobalContext.Provider>
    );
};

export function useAppContext(): IGlobalContext {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('Error en useContext');
    } else {
        return context;
    }
}
