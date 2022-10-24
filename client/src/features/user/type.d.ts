// _____USER_STORE:

interface ProfessionalInfo {
  phone: string
  birthdate: string
  linkedinUrl: string
  title: string
  experience: string
  education: string
  resume: { path: string; file: {} }
}
interface CompanyInfo {
  website: string
  about: string
  logo: { path: string; file: {} }
}
export interface UserState {
  id: string
  role: 'professional' | 'recruiter'
  name: string
  email: string
  professional: ProfessionalInfo
  company: CompanyInfo
  loading: boolean
  error: string
}

// _____USER_FORMS:

export type LoginInfoValues = Pick<UserState, 'role' | 'email'>
export interface PersonalInfoValues {
  name: UserState['name']
  phone: UserState['professional']['phone']
  birthdate: UserState['professional']['birthdate']
  linkedinUrl: UserState['professional']['linkedinUrl']
}
export interface ProfessionalInfoValues {
  title: UserState['professional']['title']
  experience: UserState['professional']['experience']
  education: UserState['professional']['education']
  resume: UserState['professional']['resume']
}
export interface CompanyInfoValues {
  name: UserState['name']
  about: UserState['company']['about']
  website: UserState['company']['website']
  logo: UserState['company']['logo']
}
