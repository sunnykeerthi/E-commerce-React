import ResultsCount from "../components/ResultsCount";
import AlternativeVerticals from "../components/AlternativeVerticals";
import AppliedFilters from "../components/AppliedFilters";
import DirectAnswer from "../components/DirectAnswer";
import VerticalResults from "../components/VerticalResults";
import SpellCheck from "../components/SpellCheck";
import LocationBias from "../components/LocationBias";
import { StandardCard } from "../components/StandardCard";
import usePageSetupEffect from "../hooks/usePageSetupEffect";
import FilterDisplayManager from "../components/FilterDisplayManager";
import Facets from "../components/Facets";
import FilterSearch from "../components/FilterSearch";
import { Divider } from "../components/StaticFilters";
import ViewFiltersButton from "../components/ViewFiltersButton";
import { useContext } from "react";
import { PageView, PageViewContext } from "../context/PageViewContext";
import PageHero from "../components/PageHero";
import styled from "styled-components";

const filterSearchFields = [
  {
    fieldApiName: "name",
    entityType: "location",
  },
  {
    fieldApiName: "paymentOptions",
    entityType: "location",
  },
  {
    fieldApiName: "services",
    entityType: "location",
  },
];

export default function LocationsPage({
  verticalKey,
}: {
  verticalKey: string;
}) {
  const { pageView } = useContext(PageViewContext);
  usePageSetupEffect(verticalKey);

  return (
    <>
      <PageHero title="Locations" />
      <div className="flex">
        <FilterDisplayManager>
          <FilterSearch
            label="Filter Search"
            sectioned={true}
            searchFields={filterSearchFields}
          />
          <Divider />
          <Facets
            searchOnChange={true}
            searchable={true}
            collapsible={true}
            defaultExpanded={true}
          />
        </FilterDisplayManager>
        {(pageView === PageView.Desktop ||
          pageView === PageView.FiltersHiddenMobile) && (
          <div className="flex-grow">
            <DirectAnswer />
            <SpellCheck />
            <div className="flex">
              <ResultsCount />
              {pageView === PageView.FiltersHiddenMobile && (
                <ViewFiltersButton />
              )}
            </div>
            <AppliedFilters hiddenFields={["builtin.entityType"]} />
            <AlternativeVerticals
              currentVerticalLabel="Locations"
              verticalsConfig={[
                { label: "FAQs", verticalKey: "faqs" },
                { label: "Jobs", verticalKey: "jobs" },
                { label: "Events", verticalKey: "events" },
              ]}
            />
            <VerticalResults CardComponent={StandardCard} />
            <LocationBias />
          </div>
        )}
      </div>
    </>
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
