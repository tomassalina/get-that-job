import { useState } from 'react'

import { StepType } from '../components/views/Onboarding/steps/type'

const useSteps = (initialState: StepType[]) => {
  const [steps, setSteps] = useState(initialState)

  const handleNext = () => {
    const currentIndex = steps.findIndex(step => step.active)
    const nextIndex = currentIndex + 1

    const updatedSteps = steps.map((step, index) => {
      if (index === currentIndex) return { ...step, active: false }
      if (index === nextIndex) return { ...step, active: true }
      return step
    })

    setSteps(updatedSteps)
  }

  const handlePrevious = () => {
    const currentIndex = steps.findIndex(step => step.active)
    const previousIndex = currentIndex - 1

    const updatedSteps = steps.map((step, index) => {
      if (index === previousIndex) return { ...step, active: true }
      if (index === currentIndex) return { ...step, active: false }
      return step
    })

    setSteps(updatedSteps)
  }

  const handleSkip = () => {}

  const handleFinish = () => {}

  return { steps, handleNext, handlePrevious, handleSkip, handleFinish }
}

export default useSteps
