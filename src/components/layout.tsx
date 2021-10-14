import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

import "./layout.css";

export const Page = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
