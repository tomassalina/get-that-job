import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { RootState } from '../../app/store'

import {
  UserState,
  LoginInfoValues,
  PersonalInfoValues,
  ProfessionalInfoValues,
  CompanyInfoValues,
} from './type'

const initialState: UserState = {
  id: '',
  role: 'professional',
  name: '',
  email: '',
  professional: {
    phone: '',
    birthdate: '',
    linkedinUrl: '',
    title: '',
    experience: '',
    education: '',
    resume: { path: '', file: {} },
  },
  company: {
    about: '',
    website: '',
    logo: { path: '', file: {} },
  },
  loading: true,
  error: '',
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUserFromLocalStorage: state => {
      const userString = localStorage.getItem('user')
      const user: UserState = userString ? JSON.parse(userString) : initialState

      state.id = user.id
      state.role = user.role
      state.email = user.email
      state.name = user.name
      state.professional = user.professional
      state.company = user.company
      state.loading = false
    },

    // Both roles
    saveUser: state => {
      const user = {
        id: state.id,
        name: state.name,
        role: state.role,
        email: state.email,
        professional: state.professional,
        company: state.company,
      }
      window.localStorage.setItem('user', JSON.stringify(user))
    },
    updateProfessionalUser: (
      state,
      action: PayloadAction<
        LoginInfoValues & PersonalInfoValues & ProfessionalInfoValues
      >
    ) => {
      state.name = action.payload.name
      state.professional.phone = action.payload.phone
      state.professional.birthdate = action.payload.birthdate
      state.professional.linkedinUrl = action.payload.linkedinUrl
      state.professional.title = action.payload.title
      state.professional.experience = action.payload.experience
      state.professional.education = action.payload.education
    },
    updateRecruiterUser: (
      state,
      action: PayloadAction<LoginInfoValues & CompanyInfoValues>
    ) => {
      state.name = action.payload.name
      state.company.website = action.payload.website
      state.company.about = action.payload.about
    },
    setLoginfo: (state, action: PayloadAction<LoginInfoValues>) => {
      state.id = uuidv4()
      state.email = action.payload.email
      state.role = action.payload.role

      state.name = initialState.name
      state.professional = initialState.professional
      state.company = initialState.company
    },

    // Professional role
    setPersonalInfo: (state, action: PayloadAction<PersonalInfoValues>) => {
      const { name, phone, birthdate, linkedinUrl } = action.payload

      state.name = name
      state.professional = {
        ...state.professional,
        phone,
        birthdate,
        linkedinUrl,
      }
    },
    setProfessionalInfo: (
      state,
      action: PayloadAction<ProfessionalInfoValues>
    ) => {
      state.professional = {
        ...state.professional,
        ...action.payload,
      }
    },

    // Recruiter role
    setCompanyInfo: (state, action: PayloadAction<CompanyInfoValues>) => {
      const { name, website, about, logo } = action.payload

      state.name = name
      state.company = { website, about, logo }
    },

    logoutUser: state => {
      localStorage.removeItem('user')

      state.id = initialState.id
      state.role = initialState.role
      state.email = initialState.email
      state.name = initialState.name
      state.professional = initialState.professional
      state.company = initialState.company
    },
  },
})

export const getUser = (state: RootState) => state.user
export const getUserIsLoading = (state: RootState) => state.user.loading
export const getUserError = (state: RootState) => state.user.error

export const {
  getUserFromLocalStorage,
  saveUser,
  updateProfessionalUser,
  updateRecruiterUser,
  setLoginfo,
  setPersonalInfo,
  setProfessionalInfo,
  setCompanyInfo,

  logoutUser,
} = userSlice.actions
export default userSlice.reducer
