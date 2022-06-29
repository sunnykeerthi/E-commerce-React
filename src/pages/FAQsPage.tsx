import ResultsCount from "../components/ResultsCount";
import AlternativeVerticals from "../components/AlternativeVerticals";
import AppliedFilters from "../components/AppliedFilters";
import DirectAnswer from "../components/DirectAnswer";
import VerticalResults from "../components/VerticalResults";
import SpellCheck from "../components/SpellCheck";
import LocationBias from "../components/LocationBias";
import { FAQCard } from "../components/FAQCard";
import usePageSetupEffect from "../hooks/usePageSetupEffect";
import PageHero from "../components/PageHero";
import { Pagination } from "../components/Pagination";
import styled from "styled-components";
import Facets from "../components/Facets";
import FacetContent from "../components/Layouts/FacetContent";
import Facet from "../components/Facet";
import MainContent from "../components/Layouts/MainContent";
import ResultCountSection from "../components/cards/ResultCountSection";
export default function FAQsPage({ verticalKey }: { verticalKey: string }) {
  usePageSetupEffect(verticalKey);
  const facetConfig = {
    c_cCategory: {
      label: "Category",
      collapsible: true,
      defaultExpanded: true,
      showFacet: true,
    },
  };
  return (
    <>
      <PageHero title="Frequently asked questions" />
      <Wrapper className="page">
        <div className="section-center align-page">
          <FacetContent
            component={
              <Facets
                showFacet={true}
                facetConfigs={facetConfig}
                searchOnChange={true}
              />
            }
          />
          <MainContent
            result={<ResultCountSection isProducts={false} sortOptions={[]} />}
            className={{ width: "inherit" }}
            component={<VerticalResults CardComponent={FAQCard} />}
          />
        </div>
      </Wrapper>

      <div style={{ marginTop: "1em" }}>
        <Pagination paginateAllOnNoResults={false}></Pagination>
      </div>
      <LocationBias />
    </>
  );
}

const Wrapper = styled.section`
  .container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    top: 1em;
    display: flex;
  }

  .align-page {
    display: flex;
    gap: 3rem 2rem;
    margin: 4rem auto;
  }
`;
