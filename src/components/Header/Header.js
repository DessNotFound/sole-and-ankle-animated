import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <ShownNav>Sale</ShownNav>
            <HiddenNav aria-hidden={true}>Sale</HiddenNav>
          </NavLink>
          <NavLink href="/new">
            <ShownNav> New&nbsp;Releases</ShownNav>
            <HiddenNav aria-hidden={true}> New&nbsp;Releases</HiddenNav>
          </NavLink>
          <NavLink href="/men">
            <ShownNav>Men</ShownNav>
            <HiddenNav aria-hidden={true}>Men</HiddenNav>
          </NavLink>
          <NavLink href="/women">
            <ShownNav> Women</ShownNav>
            <HiddenNav aria-hidden={true}>Women</HiddenNav>
          </NavLink>
          <NavLink href="/kids">
            <ShownNav>Kids</ShownNav>
            <HiddenNav aria-hidden={true}>Kids</HiddenNav>
          </NavLink>
          <NavLink href="/collections">
            <ShownNav> Collections</ShownNav>
            <HiddenNav aria-hidden={true}>Collections</HiddenNav>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  /* For focus animation */
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const ShownNav = styled.div`
  transform: translateY(0%);
  transition: transform 500ms;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${NavLink}:hover & {
      transform: translateY(-100%);
      transition: transform 300ms;
    }
  }
`;

const HiddenNav = styled.div`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
  transition: transform 500ms;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${NavLink}:hover & {
      transform: translateY(0%);
      transition: transform 300ms;
    }
  }
`;

export default Header;
