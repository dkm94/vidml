import React, { createContext, useContext, useState } from 'react';

interface CountContextProps {
    showLinks: boolean;
    setShowLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

const showLinksContext = createContext<CountContextProps | undefined>(undefined);

interface ShowLinksProviderProps {
    children: React.ReactNode;
}

export const ShowLinksProvider: React.FC<ShowLinksProviderProps> = ({ children }) => {
	const [ showLinks, setShowLinks ] = useState(false);

	return (
		<showLinksContext.Provider value={{
			showLinks,
			setShowLinks 
		}}>
			{children}
		</showLinksContext.Provider>
	);
};

export const useShowLinks = (): CountContextProps => {
	const context = useContext(showLinksContext);
	if (!context) {
		throw new Error('useShowLinks must be used within a ShowLinksProvider');
	}
	return context;
};
