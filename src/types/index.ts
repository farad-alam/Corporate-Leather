export type CustomizationGroup = {
  id: number;
  productId: number;
  groupKey: string;
  label: string;
  type: "single" | "multi" | "text" | "number" | "upload";
  required: boolean;
  displayOrder: number;
  options: CustomizationOption[];
};

export type CustomizationOption = {
  id: number;
  groupId: number;
  label: string;
  value: string;
  description: string | null;
  imageUrl: string | null;
  displayOrder: number;
};

export type InquiryFormData = {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  industry: string;
  productId: number;
  productName: string;
  customizations: Record<string, string | string[] | number>;
  brandingType: string;
  brandingNotes: string;
  logoFileUrl?: string | null;
  quantity: number;
  timeline: string;
  additionalNotes: string;
};

export type ProductWithOptions = {
  id: number;
  name: string;
  slug: string;
  categoryId: number | null;
  description: string | null;
  shortDescription: string | null;
  images: string[];
  featured: boolean;
  material: string | null;
  displayOrder: number;
  tags: string[] | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  category?: {
    id: number;
    name: string;
    slug: string;
  } | null;
  customizationGroups: CustomizationGroup[];
};

export type InquiryStatus =
  | "NEW"
  | "REVIEWED"
  | "QUOTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "CANCELLED";
