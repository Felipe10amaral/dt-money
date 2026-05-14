import { ITransactionsCategory } from "@/interface/ITransactionsCategory";
import { createContext, FC, PropsWithChildren, useContext, useState } from "react";
import * as transactionsServices from "@/services/transactions.services"

export type TransactionsContextType = {
    fetchCategories: () => Promise<void>;
    categories: ITransactionsCategory[];
}

export const TransactionContext = createContext({} as TransactionsContextType);

export const TransactionsProvider: FC<PropsWithChildren> = ({children}) => {

    const [categories, setCategories] = useState<ITransactionsCategory[]>([])
    
    console.log(categories, "passou aqui54545")
    
    const fetchCategories = async () => {
        
        const categoriesResponse = await transactionsServices.getTransactionsCategories()
        
        setCategories(categoriesResponse)
    };

    console.log(fetchCategories, "fetch categories aqui")

    return (
        <TransactionContext.Provider value={{ categories, fetchCategories }}>
            {children}
        </TransactionContext.Provider>
    )
}

export const useTransactionsContext = () => {
    return useContext(TransactionContext)
}