import React, { ReactNode } from "react";

import * as styles from "./typography.module.css";

export const Accent = ({ children }: { children: ReactNode }) => (
  <span className={styles.Accent}>{children}</span>
);

export const Paragraph = ({ children }: { children: ReactNode }) => (
  <p className={styles.Paragraph}>{children}</p>
);

export const FloatingImage = ({
  image,
  right,
}: {
  image: string;
  right?: boolean;
}) => (
  <img
    src={image}
    className={[
      styles.FloatingImage,
      right ? styles.FloatingImageRight : styles.FloatingImageLeft,
    ].join(" ")}
  />
);
