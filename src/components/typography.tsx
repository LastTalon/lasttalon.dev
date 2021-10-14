import React, { ReactNode } from "react";

import * as styles from "./typography.module.css";

export const Accent = ({ children }: { children: ReactNode }) => (
  <span className={styles.Accent}>{children}</span>
);
