export const validateCrn = (crn: string): boolean => {
  const regex = /^(?:\d{8}|[A-Za-z]{2}\d{6})$/
  return regex.test(crn)
}
