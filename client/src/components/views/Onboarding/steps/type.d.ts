export interface StepType {
  status: 'in progress' | 'pending' | 'done!'
  description: string
  active: boolean
  index?: number
}
