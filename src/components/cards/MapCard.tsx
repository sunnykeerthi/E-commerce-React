import {
  Result,
  useAnswersActions,
  useAnswersState,
} from "@yext/answers-headless-react";
import Map_Render from "./LocationMap";
interface VerticalResultsDisplayProps {
  isLoading?: boolean;
  results: Result[];
}
const MapCard = (props: VerticalResultsDisplayProps): JSX.Element | null => {
  const { results, isLoading } = props;

  return <>{results.length >= 1 && <Map_Render results={results} />}</>;
};

export default MapCard;
