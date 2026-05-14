export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

export type Patient = {
  id: string;
  fullName: string;
  country: string;
  priority: "Normal" | "Urgent";
  caseCount: number;
  lastUpdate: string;
};

export type MedicalCase = {
  id: string;
  patientName: string;
  condition: string;
  status: "Intake" | "Reviewing" | "Board Ready" | "Completed";
  updatedAt: string;
  specialist: string;
};
