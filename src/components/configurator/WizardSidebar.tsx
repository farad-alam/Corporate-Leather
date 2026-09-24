"use client";

import { useConfiguratorStore } from "@/store/configuratorStore";
import { Check } from "lucide-react";
import styles from "./WizardSidebar.module.css";

const STEPS = [
  "Select Leather",
  "Choose Color",
  "Configure Features",
  "Corporate Branding",
  "Quantity & Timeline",
  "Review Summary"
];

export default function WizardSidebar() {
  const { currentStep, setStep } = useConfiguratorStore();

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Configuration</h2>
      
      <div className={styles.steps}>
        {STEPS.map((stepName, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          const isDone = currentStep > stepNumber;
          const isPending = currentStep < stepNumber;

          return (
            <div 
              key={stepNumber}
              className={`${styles.step} ${isActive ? styles.active : ""} ${isDone ? styles.done : ""}`}
              onClick={() => {
                if (isDone || isActive) {
                  setStep(stepNumber);
                }
              }}
              role={isDone ? "button" : "presentation"}
            >
              <div className={styles.dot}>
                {isDone ? <Check size={14} strokeWidth={3} /> : stepNumber}
              </div>
              <span className={styles.label}>{stepName}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
