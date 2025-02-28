import {useState, useContext, createContext} from 'react';

const SetDogIdContext = createContext();

export default function  SetDogIdProvider({children}){
    const [selectedDogId,setSelectedDogId] = useState(1);
    return (
        <SetDogIdContext.Provider value={{selectedDogId,setSelectedDogId}} >
            {children}
        </SetDogIdContext.Provider>
    )
}

export const useSetDogId =()=>useContext(SetDogIdContext)