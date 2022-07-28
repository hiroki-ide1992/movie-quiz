const ShuffleQuestion = ([...array], total) => {
  for (let i = 30; i >= 0; i--) {
    const j = Math.floor(Math.random() * (total + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default ShuffleQuestion;