import { FAQCard } from "../components/FAQCard";
import usePageSetupEffect from "../hooks/usePageSetupEffect";
import PageHero from "../components/PageHero";
import styled from "styled-components";
import Facets from "../components/Facets";
import FacetContent from "../components/Layouts/FacetContent";
import MainContent from "../components/Layouts/MainContent";
import ResultCountSection from "../components/cards/ResultCountSection";
import {
  useAnswersActions,
  useAnswersState,
} from "@yext/answers-headless-react";
import Loading from "../components/Loading";
import {
  LocationBias,
  Pagination,
  VerticalResults,
} from "@yext/answers-react-components";
import { useLayoutEffect } from "react";
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
  const isLoading =
    useAnswersState((state) => state.searchStatus.isLoading) ?? false;
  // const answersActions = useAnswersActions();
  // useLayoutEffect(() => {
  //   answersActions.setVertical(verticalKey);
  // });
  // const results = useAnswersState((state) => state.vertical.results) || [];
  // const isLoading1 = useAnswersState((state) => state.searchStatus.isLoading);

  // !isLoading1 && results.length >= 1 && console.log(JSON.stringify(results));
  return isLoading ? (
    <Loading></Loading>
  ) : (
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
