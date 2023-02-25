export const interpolate = (str, data) => {
  Object.keys(data).forEach((key) => {
    str = str.replaceAll(`{{${key}}}`, data[key])
  })

  return str
}
