const shuffle = function (array) {
  for (let rightIndex = array.length - 1; rightIndex > 0; rightIndex -= 1) {
    const leftIndex = Math.floor(Math.random() * rightIndex);
    const rightValue = array[rightIndex];

    [array[rightIndex], array[leftIndex]] = [array[leftIndex], rightValue];
  };

  return array;
};