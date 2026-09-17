export interface LabService {
  id: string;
  title: string;
  category: string;
  summary: string;
  details: string[];
  sampleTypes: string;
  turnaroundNote: string;
}

export interface AccreditationAward {
  id: string;
  title: string;
  body: string;
  year: string;
  type: 'accreditation' | 'award' | 'cme';
  credentialId?: string;
  significance: string;
}

export interface DiagnosticTest {
  id: string;
  code: string;
  name: string;
  category: 'Core Diagnostics' | 'Preventive & Wellness' | 'Specialized Services';
  sampleType: string;
  fastingRequired: boolean;
  fastingInstructions?: string;
  turnaroundTime: string;
  clinicalSignificance: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  designation: string;
  rating: number;
  date: string;
  comment: string;
  serviceType: string;
}

export interface BookingFormData {
  serviceType: 'lab_visit' | 'home_collection';
  fullName: string;
  phone: string;
  email: string;
  dob: string;
  gender: 'Male' | 'Female' | '';
  preferredDate: string;
  preferredTime: string;
  address?: string;
  selectedTestName?: string;
  notes?: string;
  prescriptionFile?: File | null;
}
