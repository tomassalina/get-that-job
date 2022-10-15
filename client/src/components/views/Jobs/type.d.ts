type JobType = 'full time' | 'part time' | 'freelance'
type JobCategory =
  | 'manufacturing'
  | 'legal'
  | 'education'
  | 'goverment'
  | 'sales'

export interface Job {
  id: string
  title: string
  companyName: string
  companyLogo: string
  salaryRange: {
    min: number
    max: number
  }
  type: JobType
  category: JobCategory

  aboutCompany: string
  aboutPosition: string
  requirements: string
  optionalRequirements: string
}
