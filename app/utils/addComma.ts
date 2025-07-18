export const addComma = (input: number | string) => {
  const num = typeof input === 'string'
    ? Number(input)
    : input

  if (isNaN(num)) return ''
  return num.toLocaleString('ja-JP')
}