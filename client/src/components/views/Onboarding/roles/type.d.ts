export interface ProfessionalForm {
  role: 'professional'
  email: string
  name: string
  phone: string
  birthdate: string
  linkedinUrl: string
  title: string
  experience: string
  education: string
  resume: { file: object; path: string }
}

export interface RecruiterForm {
  role: 'recruiter'
  email: string
  companyName: string
  companyWebsite: string
  companyAbout: string
  companyLogo: { file: object; path: string }
}

export interface InitialState {
  professionalForm: ProfessionalForm
  recruiterForm: RecruiterForm
}
