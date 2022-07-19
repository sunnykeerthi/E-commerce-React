import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import {
  provideAnswersHeadless,
  SandboxEndpoints,
  SearchTypeEnum,
  useAnswersState,
} from "@yext/answers-headless-react";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import {
  DropdownItem,
  SearchBar,
  VisualAutocompleteConfig,
} from "@yext/answers-react-components";
import { answersHeadlessConfig } from "../config/answersHeadlessConfig";
import { useEffect, useState } from "react";
import CartIcon from "./cards/CartIcon";

const Navigation_custom = ({ links }: any) => {
  const [vertKey, setVertKey] = useState("");

  const isVertical =
    useAnswersState((s) => s.meta.searchType) === SearchTypeEnum.Vertical;
  const visualAutocompleteConfig: VisualAutocompleteConfig = {
    entityPreviewSearcher: provideAnswersHeadless({
      ...answersHeadlessConfig,
      endpoints: SandboxEndpoints,
      headlessId: "visual-autocomplete",
    }),
    restrictVerticals: ["products"],
    renderEntityPreviews: (isLoading, verticalKeyToResults) => {
      if (!verticalKeyToResults.products) {
        return null;
      }

      const { results } = verticalKeyToResults.products;

      return (
        <div className="SB_parent">
          {results.map((r: any, index: number) => (
            <DropdownItem
              key={index + "-" + r.name}
              value={r.name ? r.name : ""}
            >
              <Link to={`/product/${r.id}`}>
                <div className="SB_container2">
                  <div>
                    <img
                      src={r.rawData?.primaryPhoto?.image?.url}
                      className="SB_iconDetails"
                    />
                  </div>
                  <div style={{ marginLeft: "5em" }}>
                    <h4>{r.name}</h4>
                    <div>{r.rawData?.c_price}</div>
                  </div>
                </div>
              </Link>
            </DropdownItem>
          ))}
        </div>
      );
    },
  };
  useEffect(() => {
    setVertKey(window.location.pathname);
  }, [window.location.href]);
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="logoClass">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-toggle">
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          {links.map((item: any, idx: any) => {
            const { to, label } = item;
            return (
              <li key={to}>
                <NavLink to={to} exact>
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {vertKey !== "/products" ? (
          <SearchBar
            placeholder="search"
            customCssClasses={{
              optionContainer: "hidden",
              container: "overrideContainer",
            }}
          />
        ) : (
          <SearchBar
            visualAutocompleteConfig={visualAutocompleteConfig}
            customCssClasses={{
              optionContainer: "hidden",
              container: "overrideContainer",
            }}
          />
        )}
        <CartIcon />
      </div>
    </NavContainer>
  );
};
const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 150%;
    }
  }
  .logoClass {
    height: 100px;
    width: 130px;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  a.active {
    border-bottom: 2px solid var(--clr-primary-7);
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto auto;
      align-items: center;
      gap: 1.5em;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;

        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
        a:active {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
  .overrideContainer {
    margin-bottom: unset;
    width: 550px;
  }
`;
export default Navigation_custom;
