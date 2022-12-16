import showSpecial from '../js/destruction'

test.each([
  ['assignedValue', { special: [{ id: 1, description: 2 }] }, [{ id: 1, description: 2 }]],
  ['UnassignedValue', { special: [{ id: 1 }] }, [{ id: 1, description: 'Описание недоступно' }]]
])('testing func with %s obj', (_, obj, expected) => {
  const result = showSpecial(obj)
  expect(result).toStrictEqual(expected)
})
