import { useState } from 'react'

import { StepType } from '../components/views/Onboarding/steps/type'

const useSteps = (initialState: StepType[]) => {
  const [steps, setSteps] = useState<StepType[]>(initialState)

  const toNextStep = () => {
    const currentIndex = steps.findIndex(step => step.active)
    const nextIndex = currentIndex + 1

    const existsNextStep = steps[nextIndex]

    const updatedSteps: StepType[] = steps.map((step, index) => {
      if (existsNextStep) {
        if (index === currentIndex)
          return { ...step, active: false, status: 'done!' }
        if (index === nextIndex)
          return { ...step, active: true, status: 'in progress' }
      }
      return step
    })

    setSteps(updatedSteps)
  }

  const toPreviousStep = () => {
    const currentIndex = steps.findIndex(step => step.active)
    const previousIndex = currentIndex - 1

    const updatedSteps: StepType[] = steps.map((step, index) => {
      if (index === currentIndex)
        return { ...step, active: false, status: 'pending' }
      if (index === previousIndex)
        return { ...step, active: true, status: 'in progress' }
      return step
    })

    setSteps(updatedSteps)
  }

  const skipStep = () => {
    const currentIndex = steps.findIndex(step => step.active)
    const nextIndex = currentIndex + 1

    const existsNextStep = steps[nextIndex]

    const updatedSteps: StepType[] = steps.map((step, index) => {
      if (existsNextStep) {
        if (index === currentIndex)
          return { ...step, active: false, status: 'pending' }
        if (index === nextIndex)
          return { ...step, active: true, status: 'in progress' }
      }
      return step
    })

    setSteps(updatedSteps)
  }

  return { steps, toNextStep, toPreviousStep, skipStep }
}

export default useSteps
