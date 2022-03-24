import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

import "./layout.css";

export const Page = ({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) => (
  <>
    <Header />
    <main>
      <title>{title ? title + " — " : null}LastTalon</title>
      {children}
    </main>
    <Footer />
  </>
);
