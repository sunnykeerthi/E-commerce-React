import React, { useState } from "react";
import { useContext } from "react";

const ProductsContext = React.createContext<any>({});

export const ProductsProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  const [isGrid, setIsGrid] = useState<any>(true);
  return (
    <ProductsContext.Provider value={{ isGrid, setIsGrid }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
