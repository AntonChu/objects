export default function showSpecial (obj) {
  const result = []

  for (const item of obj.special) {
    const { description = 'Описание недоступно' } = item

    if (item.description) {
      result.push(item)
    } else {
      item.description = description
      result.push(item)
    }
  }

  return result
}
