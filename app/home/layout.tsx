import React, { ReactNode } from "react";
import { Headers } from "../shared/components";
import { Footer } from "../shared/components/footers";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Headers />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
