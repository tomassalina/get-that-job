type JobType = 'full time' | 'part time' | 'freelance'
type JobCategory =
  | 'manufacturing'
  | 'legal'
  | 'education'
  | 'goverment'
  | 'sales'
type JobStatus = 'waiting' | 'in progress' | 'finished' | 'declined'

export interface Job {
  id: string
  title: string
  salaryRange: {
    min: number
    max: number
  }
  type: JobType
  category: JobCategory
  status: JobStatus
  createdOn: string

  companyName: string
  companyLogo: string
  aboutCompany: string
  aboutPosition: string
  requirements: string
  optionalRequirements: string
}
