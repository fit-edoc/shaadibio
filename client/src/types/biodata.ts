export interface PersonalDetails {
  name: string;
  gender: string;
  dob: string;
  birthTime: string;
  birthPlace: string;
  height: string;
  weight: string;
  bloodGroup: string;
  complexion: string;
  religion: string;
  caste: string;
  subCaste: string;
  gotra: string;
  rashi: string;
  nakshatra: string;
  maritalStatus: string;
  nationality: string;
  motherTongue: string;
}

export interface EducationProfession {
  education: string;
  profession: string;
  income: string;
  jobLocation: string;
  companyName: string;
}

export interface FamilyDetails {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  brothers: number;
  sisters: number;
  marriedBrothers: number;
  marriedSisters: number;
  familyType: string;
  nativePlace: string;
}

export interface ContactDetails {
  mobile: string;
  email: string;
  address: string;
}

export interface BioData {
  id?: string;
  personalDetails: PersonalDetails;
  educationProfession: EducationProfession;
  familyDetails: FamilyDetails;
  contactDetails: ContactDetails;
  profileImage?: string;
  templateId: string;
  themeColor: string;
  fontFamily: string;
}
