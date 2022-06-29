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
import EntityPreviews from "../components/VisualAutocomplete/EntityPreviews";
import VisualSearchBar from "../components/VisualAutocomplete/VisualSearchBar";
export default function ProductsPage({ verticalKey }: { verticalKey: string }) {
  usePageSetupEffect(verticalKey);

  return (
    <div>
      <PageHero title="Products" />
      <VisualSearchBar
        placeholder="Search..."
        headlessId="visual-autocomplete"
        entityPreviewsDebouncingTime={100}
        verticalKeyToLabel={(verticalKey) => "Products"}
        renderEntityPreviews={(isLoading) => (
          <div className={isLoading ? "opacity-50" : ""}>
            <EntityPreviews verticalKey="products">
              {(results) => (
                <div className="flex ml-4 mt-1">
                  {results.map((r, index) => (
                    <Product_Card result={r} key={`${index}-${r.name}`} />
                  ))}
                </div>
              )}
            </EntityPreviews>
          </div>
        )}
      />
      <Wrapper className="page">
        <div className="section-center products">
          <FacetContent component={<FacetsSection />} />
          <div>
            <MainContent
              result={<ResultCountSection isProducts={true} />}
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
function Product_Card({ result }: any) {
  return (
    <div
      tabIndex={0}
      className="flex flex-col mb-3 mr-4 border rounded-md p-3 text-lg"
    >
      {result.id}
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
      grid-template-columns: 200px 1fr;
    }
  }
`;
