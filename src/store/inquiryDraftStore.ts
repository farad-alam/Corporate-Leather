import { create } from "zustand";
import { persist } from "zustand/middleware";

type InquiryDraftState = {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  industry: string;
  additionalNotes: string;

  setDraft: (fields: Partial<InquiryDraftState>) => void;
  clearDraft: () => void;
};

const initialState = {
  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  industry: "",
  additionalNotes: "",
};

export const useInquiryDraftStore = create<InquiryDraftState>()(
  persist(
    (set) => ({
      ...initialState,

      setDraft: (fields) =>
        set((state) => ({
          ...state,
          ...fields,
        })),

      clearDraft: () => set(initialState),
    }),
    {
      name: "corporate-leather-inquiry-draft",
    }
  )
);
