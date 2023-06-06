import { createContext, useContext, useState } from 'react'
import productData, { ProductType } from './productData';
import userListData, { UserListType } from './userListData';



type MyContextType = {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    usersData: UserListType[];
    setUsersData: React.Dispatch<React.SetStateAction<UserListType[]>>;
    productsData: ProductType[];
    setProductsData: React.Dispatch<React.SetStateAction<ProductType[]>>;
}


/*----------MyContext----------*/
const MyContext = createContext<MyContextType>({} as MyContextType)
export const useMyContext = () => useContext(MyContext)



/*----------MyContextProvider----------*/
const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setOpen] = useState(false)
    const  [usersData, setUsersData] = useState<UserListType[]>([...userListData])
    const [productsData, setProductsData] = useState<ProductType[]>([...productData])


    const value = { isOpen, setOpen, usersData, setUsersData, productsData, setProductsData }
    return (
        <MyContext.Provider value={value}>
            { children }
        </MyContext.Provider>
    )
}

export default MyContextProvider