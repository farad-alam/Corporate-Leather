import { create } from "zustand";

type ConfiguratorState = {
  productId: number | null;
  productSlug: string;
  productName: string;
  currentStep: number;
  totalSteps: number;
  selections: Record<string, string | string[] | number>;
  brandingType: string;
  brandingNotes: string;
  logoFile: File | null;
  quantity: number;
  timeline: string;

  // Actions
  setProduct: (id: number, slug: string, name: string) => void;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setSelection: (groupKey: string, value: string | string[] | number) => void;
  setBranding: (type: string, notes: string) => void;
  setLogoFile: (file: File | null) => void;
  setQuantity: (qty: number) => void;
  setTimeline: (timeline: string) => void;
  reset: () => void;
};

const initialState = {
  productId: null,
  productSlug: "",
  productName: "",
  currentStep: 1,
  totalSteps: 6, // Base steps: Leather, Color, Features, Branding, Quantity, Summary
  selections: {},
  brandingType: "none",
  brandingNotes: "",
  logoFile: null,
  quantity: 50, // Minimum MOQ
  timeline: "1 month",
};

export const useConfiguratorStore = create<ConfiguratorState>((set, get) => ({
  ...initialState,

  setProduct: (id, slug, name) =>
    set({ productId: id, productSlug: slug, productName: name }),

  setStep: (step) => set({ currentStep: step }),

  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, state.totalSteps),
    })),

  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1),
    })),

  setSelection: (groupKey, value) =>
    set((state) => ({
      selections: {
        ...state.selections,
        [groupKey]: value,
      },
    })),

  setBranding: (type, notes) =>
    set({ brandingType: type, brandingNotes: notes }),

  setLogoFile: (file) => set({ logoFile: file }),

  setQuantity: (qty) => set({ quantity: Math.max(qty, 50) }),

  setTimeline: (timeline) => set({ timeline }),

  reset: () => set(initialState),
}));
