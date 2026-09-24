"use client";

import { useConfiguratorStore } from "@/store/configuratorStore";
import styles from "./WizardNav.module.css";
import { useRouter } from "next/navigation";

export default function WizardNav() {
  const { currentStep, totalSteps, prevStep, nextStep } = useConfiguratorStore();
  const router = useRouter();

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  const handleNext = () => {
    if (isLastStep) {
      router.push("/inquiry");
    } else {
      nextStep();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.nav}>
      <button 
        className={`btn btn-outline ${styles.backBtn}`} 
        onClick={prevStep}
        disabled={isFirstStep}
      >
        &larr; Back
      </button>

      <button 
        className={`btn btn-gold ${styles.nextBtn}`} 
        onClick={handleNext}
      >
        {isLastStep ? "Proceed to Inquiry" : "Continue"} &rarr;
      </button>
    </div>
  );
}
