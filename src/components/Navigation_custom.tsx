import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SampleVisualSearchBar from "../components/VisualAutocomplete/SampleVisualSearchBar";
import { SearchTypeEnum, useAnswersState } from "@yext/answers-headless-react";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";

const Navigation_custom = ({ links }: any) => {
  const isVertical =
    useAnswersState((s) => s.meta.searchType) === SearchTypeEnum.Vertical;
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="">
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
        {/* {isVertical ? (
          <SearchBar placeholder="Search..." />
        ) : (
          <SampleVisualSearchBar />
        )} */}
      </div>
    </NavContainer>
  );
};
const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
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
      grid-template-columns: auto 1fr auto;
      align-items: center;
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
`;
export default Navigation_custom;
