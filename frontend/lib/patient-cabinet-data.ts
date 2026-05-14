export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  priceEur: number;
  etaHours: number;
};

export const serviceCatalog: ServiceItem[] = [
  {
    id: "srv-neuro",
    title: "Neuro-Oncology Second Opinion",
    description: "Comprehensive board review with MRI/CT radiology correlation and treatment alternatives.",
    priceEur: 1890,
    etaHours: 48
  },
  {
    id: "srv-cardio",
    title: "Complex Cardiology Review",
    description: "Senior cardiology panel review for diagnostics, intervention strategy, and risk profile.",
    priceEur: 1290,
    etaHours: 36
  },
  {
    id: "srv-rapid",
    title: "Rapid 12h Triage",
    description: "Priority intake and critical-first medical assessment for urgent clinical decisions.",
    priceEur: 690,
    etaHours: 12
  },
  {
    id: "srv-genetic",
    title: "Molecular & Genetics Add-on",
    description: "Optional molecular pathway interpretation and genomic-based therapy options.",
    priceEur: 890,
    etaHours: 72
  }
];

export const patientInvoices = [
  { id: "INV-2408", service: "Neuro-Oncology Second Opinion", amountEur: 1890, status: "Paid" },
  { id: "INV-2417", service: "Rapid 12h Triage", amountEur: 690, status: "Pending" }
];
