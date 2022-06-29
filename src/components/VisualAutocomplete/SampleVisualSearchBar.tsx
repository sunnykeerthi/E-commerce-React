import VisualSearchBar from "./VisualSearchBar";
import { Result } from "@yext/answers-headless-react";
import EntityPreviews from "./EntityPreviews";
import { universalResultsConfig } from "../../config/universalResultsConfig";

/**
 * This is an example of how to use the VisualSearchBar component.
 */
export default function SampleVisualSearchBar() {
  return (
    <VisualSearchBar
      placeholder="Search..."
      headlessId="visual-autocomplete"
      entityPreviewsDebouncingTime={100}
      verticalKeyToLabel={(verticalKey) => "products"}
      renderEntityPreviews={(isLoading) => (
        <div className={isLoading ? "opacity-50" : ""}>
          <EntityPreviews verticalKey="products">
            {(results) => (
              <div className="flex ml-4 mt-1">
                {/* {results.map((r, index) => (
                  // <FaqCard result={r} key={`${index}-${r.name}`} />
                ))} */}
              </div>
            )}
          </EntityPreviews>
        </div>
      )}
    />
  );
}

interface CardProps {
  result: Result;
}

interface FaqData {
  name?: string;
  id?: string;
}

function FaqCard({ result }: CardProps) {
  const faqData: FaqData = result.rawData;
  return (
    <div key={faqData.id}>
      <div className="h-px bg-gray-200 mt-1 mb-3 mx-2.5"></div>
      <div tabIndex={0} className="flex flex-col mx-4 mb-3 rounded-md">
        <div>{faqData.id}</div>
      </div>
    </div>
  );
}
