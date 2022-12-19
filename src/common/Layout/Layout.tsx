import React, { BaseHTMLAttributes } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

interface ILayout extends BaseHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
