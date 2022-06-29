import { StandardCard } from "../components/StandardCard";
import { VerticalConfig } from "../components/UniversalResults";

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
  products: {
    label: "Products",
  },
  events: {
    label: "Events",
    cardConfig: {
      CardComponent: StandardCard,
      showOrdinal: false,
    },
  },
  jobs: {
    label: "Jobs",
  },
  faqs: {
    label: "FAQ",
    viewAllButton: true,
    cardConfig: {
      CardComponent: StandardCard,
      showOrdinal: false,
    },
  },
  locations: {
    label: "Locations",
  },
};
