import { useEffect, useState } from "react";
import styled from "styled-components";
import AlternativeVerticals from "../AlternativeVerticals";
import AppliedFilters from "../AppliedFilters";
import ProductsVerticalResults from "../VerticalRender/ProductsVerticalResults";
import { ProductCard } from "./ProductCard";
import { useProductsContext } from "../../context/ProductsContext";
import Loading from "../Loading";

const ProductsListContainer = (props: any) => {
  const { isGrid } = useProductsContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <>
      <AppliedFilters hiddenFields={["builtin.entityType"]} />
      {isGrid ? (
        <WrapperGrid>
          <div className="products-container">
            <ProductsVerticalResults
              CardComponent={ProductCard}
              displayAllResults={false}
            />
          </div>
        </WrapperGrid>
      ) : (
        <WrapperList>
          <ProductsVerticalResults
            CardComponent={ProductCard}
            displayAllResults={false}
          />
        </WrapperList>
      )}
    </>
  );
};

export default ProductsListContainer;
const WrapperGrid = styled.section`
  img {
    height: 175px;
  }
  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const WrapperList = styled.section`
  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;
