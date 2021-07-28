/* eslint-disable react/prop-types */
import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.png';

export default function HeaderContainer({ children }) {
  return (
    // <p>hi</p>
    <Header>
      <Header.Frame>
        <Header.Logo src={logo} to={ROUTES.HOME} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
