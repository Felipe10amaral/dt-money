import { dtMoneyAPI } from "@/api/dt-money";
import { ITransactionsCategory } from "@/interface/ITransactionsCategory";

export const getTransactionsCategories = async (): Promise<ITransactionsCategory[]> => {
    const {data} = await dtMoneyAPI.get<ITransactionsCategory[]>("/transactions/categories")

    return data
}