interface StepFormProps {
  children: React.ReactNode
}

export const StepForm = ({ children }: StepFormProps) => {
  return <form>{children}</form>
}
