import VerticalResults from "../components/VerticalResults";
import { StandardCard } from "../components/StandardCard";
import usePageSetupEffect from "../hooks/usePageSetupEffect";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import MapCard from "../components/cards/MapCard";
import { useAnswersState } from "@yext/answers-headless-react";
import Loading from "../components/Loading";
import { FilterSearch, LocationBias } from "@yext/answers-react-components";
import PageHero from "../components/PageHero";
import FilterDisplayManager from "../components/FilterDisplayManager";
import { Divider } from "../components/StaticFilters";
import Facets from "../components/Facets";
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
  usePageSetupEffect(verticalKey);
  let results = useAnswersState((state) => state.vertical.results) || [];
  const [res1, setRes1] = useState<any>([]);
  const isLoading =
    useAnswersState((state) => state.searchStatus.isLoading) || false;

  useEffect(() => {
    if (results.length >= 1) {
      if (!isLoading && results[0].rawData.type === "location") {
        setRes1(results);
      }
    }
  }, [results]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <PageHero title="Locations" />
      <Wrapper className="page">
        <div className="margined">
          <div className="flex">
            <MapCard results={res1} isLoading={isLoading} />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  .margined {
    margin: 2em;
  }
`;
