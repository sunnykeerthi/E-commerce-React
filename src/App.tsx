import PageRouter from "./PageRouter";
import StandardLayout from "./pages/StandardLayout";
import { AnswersHeadlessProvider } from "@yext/answers-headless-react";

import { routeConfig } from "./config/routeConfig";
import { PageViewContextProvider } from "./context/PageViewContext";
import { useEffect, useState, createContext } from "react";
import { answersHeadlessConfig } from "./config/answersHeadlessConfig";
export type ScreenSize = "sm" | "md" | "lg" | "xl";
 
export const ResponsiveContext = createContext<ScreenSize>("xl");
export default function App() {
  const [screenSize, setScreenSize] = useState<ScreenSize>("xl");

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.outerWidth;
    if (width <= 640) {
      setScreenSize("sm");
    } else if (width > 640 && width <= 768) {
      setScreenSize("md");
    } else if (width > 768 && width <= 1024) {
      setScreenSize("lg");
    } else if (width > 1024) {
      setScreenSize("xl");
    }
  };
  return (
    <AnswersHeadlessProvider {...answersHeadlessConfig}>
      <PageViewContextProvider>
        <PageRouter Layout={StandardLayout} routes={routeConfig} />
      </PageViewContextProvider>
    </AnswersHeadlessProvider>
  );
}
