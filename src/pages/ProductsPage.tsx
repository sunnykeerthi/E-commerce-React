import LocationBias from "../components/LocationBias";
import usePageSetupEffect from "../hooks/usePageSetupEffect";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import { Pagination } from "../components/Pagination";
import FacetsSection from "../components/cards/FacetsSection";
import ResultCountSection from "../components/cards/ResultCountSection";
import ProductsListContainer from "../components/cards/ProductsListContainer";
import FacetContent from "../components/Layouts/FacetContent";
import MainContent from "../components/Layouts/MainContent";
import { Direction, SortBy, SortType } from "@yext/answers-headless-react";
export default function ProductsPage({ verticalKey }: { verticalKey: string }) {
  usePageSetupEffect(verticalKey);
  const filterSearchFields = [
    {
      fieldApiName: "name",
      entityType: "products",
    },
  ];

  const sortByOptions: { label: string; sortBy: SortBy }[] = [
    {
      label: "Price: High to Low",
      sortBy: {
        field: "c_price",
        direction: Direction.Descending,
        type: SortType.Field,
      },
    },
    {
      label: "Price: Low to High",
      sortBy: {
        field: "c_price",
        direction: Direction.Ascending,
        type: SortType.Field,
      },
    },
    {
      label: "Name: A-Z",
      sortBy: {
        field: "name",
        direction: Direction.Ascending,
        type: SortType.Field,
      },
    },
    {
      label: "Name: Z-A",
      sortBy: {
        field: "name",
        direction: Direction.Descending,
        type: SortType.Field,
      },
    },
  ];
  return (
    <div>
      <PageHero title="Products" />

      <Wrapper className="page">
        <div className="section-center products">
          <FacetContent component={<FacetsSection />} />
          <div>
            <MainContent
              result={
                <ResultCountSection
                  isProducts={true}
                  sortOptions={sortByOptions}
                />
              }
              component={<ProductsListContainer />}
            ></MainContent>
          </div>
        </div>
      </Wrapper>
      <div style={{ marginTop: "1em", marginBottom: "1em" }}>
        <Pagination paginateAllOnNoResults={false}></Pagination>
      </div>
      <LocationBias />
    </div>
  );
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 250px 1fr;
    }
  }
`;
