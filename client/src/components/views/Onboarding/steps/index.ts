import { StepType } from './type'

export { Step } from './Step'
export { StepForm } from './StepForm'

export const professionalSteps: StepType[] = [
  {
    status: 'in progress',
    description: 'Login information',
    active: true,
  },
  {
    status: 'pending',
    description: 'Personal information',
    active: false,
  },
  {
    status: 'pending',
    description: 'Professional information',
    active: false,
  },
]

export const recruiterSteps: StepType[] = [
  {
    status: 'in progress',
    description: 'Login information',
    active: true,
  },
  {
    status: 'pending',
    description: 'Company information',
    active: false,
  },
]
