type JobType = 'full time' | 'part time' | 'freelance'
type JobCategory =
  | 'software and technology'
  | 'marketing and advertising'
  | 'education'
  | 'healthcare'
  | 'sales'
  | 'real estate'
  | 'environmental and energy'
  | 'ecommerce'
  | 'ecommerce'
  | 'blockchain and cryptocurrencies'

type JobStatus = 'waiting' | 'in progress' | 'finished' | 'declined'

export interface JobPost {
  id: string
  title: string
  createdOn: string

  salaryRange: {
    min: number
    max: number
  }
  type: JobType
  category: JobCategory
  status: JobStatus

  aboutPosition: string
  requirements: string
  optionalRequirements: string

  company: {
    id: string
    name: string
    logo: string
    about: string
  }
  applicants: string[]
}
