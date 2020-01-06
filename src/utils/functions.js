export const sortByMagnitude = (data, numberOfElements) => {
  const arrayToSort = Object.values(data).flat();
  const compareAscending = (a,b) => {
    const magnitudeA = a.absolute_magnitude_h;
    const magnitudeB = b.absolute_magnitude_h;

    let comparison = 0;
    if (magnitudeA > magnitudeB) {
      comparison = 1;
    } else if (magnitudeA < magnitudeB) {
      comparison = -1;
    }
    return comparison;
  }
  return arrayToSort.sort(compareAscending).slice(0,numberOfElements)
}

export const uniformName = (name) => {
  let nameToUniform = name.split(' ');
  if (nameToUniform.length === 3) {
    nameToUniform.splice(0,1);
  }
  return nameToUniform.join(' ')
}

export const calculateRelativeScale = (unscaledNum, minAllowed, maxAllowed, min, max) => ((maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed)
