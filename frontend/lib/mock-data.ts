import { MedicalCase, Patient } from "@/lib/types";

export const stats = [
  { label: "ACTIVE CASES", value: "128", trend: "+12%" },
  { label: "BOARD READY", value: "37", trend: "+4%" },
  { label: "AVG RESPONSE", value: "18H", trend: "-9%" },
  { label: "PREMIUM MEMBERS", value: "241", trend: "+21%" }
];

export const patients: Patient[] = [
  {
    id: "P-1041",
    fullName: "Anna Keller",
    country: "Switzerland",
    priority: "Urgent",
    caseCount: 2,
    lastUpdate: "2h ago"
  },
  {
    id: "P-1038",
    fullName: "Marco Rossi",
    country: "Italy",
    priority: "Normal",
    caseCount: 1,
    lastUpdate: "5h ago"
  },
  {
    id: "P-1035",
    fullName: "Lena Muller",
    country: "Germany",
    priority: "Urgent",
    caseCount: 3,
    lastUpdate: "8h ago"
  }
];

export const cases: MedicalCase[] = [
  {
    id: "C-7721",
    patientName: "Anna Keller",
    condition: "Glioblastoma progression",
    status: "Reviewing",
    updatedAt: "30m ago",
    specialist: "Prof. Dubois"
  },
  {
    id: "C-7718",
    patientName: "Marco Rossi",
    condition: "Complex cardiomyopathy",
    status: "Board Ready",
    updatedAt: "1h ago",
    specialist: "Dr. Schmid"
  },
  {
    id: "C-7709",
    patientName: "Lena Muller",
    condition: "Post-op oncology planning",
    status: "Intake",
    updatedAt: "3h ago",
    specialist: "Dr. Meier"
  }
];

export const caseDetail = {
  id: "C-7721",
  patient: "Anna Keller",
  diagnosis: "Glioblastoma progression, stage IV",
  assignedBoard: "Neuro-Oncology",
  nextSession: "May 7, 10:30 CET",
  documents: 24,
  dicomSeries: 6
};
