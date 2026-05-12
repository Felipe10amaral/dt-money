import { dtMoneyAPI } from "@/api/dt-money";
import { ITransactionsCategory } from "@/interface/ITransactionsCategory";

export const getTransactionsCategories = async (): Promise<ITransactionsCategory[]> => {
    const {data} = await dtMoneyAPI.get<ITransactionsCategory[]>("/transaction/categories")

    console.log(data, "categories aquiiiiiiiiiii")

    return data
}