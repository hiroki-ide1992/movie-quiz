const BonusSet = (reflectItem, answer) => {

  let perfect:number  = answer.length;
  let score:number = 0;

  for(let i = 0; i <= answer.length -1; i++){
    score = reflectItem[i].textContent == answer[i] || reflectItem[i].textContent == "F" ? score + 1: score;
  }

  return perfect == score;
}

export default BonusSet;