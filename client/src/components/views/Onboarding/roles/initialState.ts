import { InitialState } from './type'

export const initialState: InitialState = {
  professionalForm: {
    role: 'professional',
    email: '',
    name: '',
    phone: '',
    birthdate: '',
    linkedinUrl: '',
    title: '',
    experience: '',
    education: '',
    resume: { file: {}, path: '' },
  },
  recruiterForm: {
    role: 'recruiter',
    email: '',
    companyName: '',
    companyAbout: '',
    companyWebsite: '',
    companyLogo: { file: {}, path: '' },
  },
}
