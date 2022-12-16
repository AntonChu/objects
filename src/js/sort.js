export default function objectSort (obj, arr) {
  const resultArr = []

  for (const item of arr) {
    const el = { key: item, value: obj[item] }
    resultArr.push(el)
    delete obj[item]
  };

  const intermediateArr = Object.keys(obj).sort()

  for (const item of intermediateArr) {
    const el = { key: item, value: obj[item] }
    resultArr.push(el)
  }

  return resultArr
}
