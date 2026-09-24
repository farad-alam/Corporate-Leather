"use client";

import { useConfiguratorStore } from "@/store/configuratorStore";
import WizardSidebar from "./WizardSidebar";
import WizardNav from "./WizardNav";
import styles from "./WizardShell.module.css";

type WizardShellProps = {
  children: React.ReactNode;
};

export default function WizardShell({ children }: WizardShellProps) {
  const { productName } = useConfiguratorStore();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className="section-eyebrow">Product Configurator</span>
        <h1 className={styles.title}>Customizing: {productName}</h1>
      </div>

      <div className={styles.grid}>
        <div className={styles.sidebarCol}>
          <WizardSidebar />
        </div>
        
        <div className={styles.contentCol}>
          <div className={styles.stepContent}>
            {children}
          </div>
          <WizardNav />
        </div>
      </div>
    </div>
  );
}
