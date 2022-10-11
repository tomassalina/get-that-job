import { ProfessionalForm, RecruiterForm } from '../roles/type'

export interface LoginInformationValues {
  email: string
}

export type PersonalInformationValues = Pick<
  ProfessionalForm,
  'name' | 'phone' | 'birthdate' | 'linkedinUrl'
>

export type ProfessionalInformationValues = Pick<
  ProfessionalForm,
  'title' | 'experience' | 'education' | 'resume'
>

export type CompanyInformationValues = Omit<RecruiterForm, 'role' | 'email'>
