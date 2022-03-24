import React, { ReactNode } from "react";
import { Accent } from "./typography";

import * as styles from "./boxLayout.module.css";

export const Box = ({
  title,
  subtitle,
  className,
  children,
}: {
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <section className={[styles.Box, className].join(" ")}>
      {title ? (
        <>
          <h1>
            <span>{title}</span>
            {subtitle ? (
              <p>
                <Accent>— {subtitle}</Accent>
              </p>
            ) : null}
          </h1>
        </>
      ) : null}
      <div>{children}</div>
    </section>
  );
};

export const BoxFeature = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) => (
  <Box title={title} subtitle={subtitle} className={styles.BoxFeature}>
    {children}
  </Box>
);

export const BoxLayout = ({ children }: { children: ReactNode }) => (
  <div className={styles.BoxLayout}>{children}</div>
);
