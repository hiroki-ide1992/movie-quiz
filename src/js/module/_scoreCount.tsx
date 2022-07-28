const scoreCount = (reflectItem, answer, hint) => {

  let score:number     = 0;
  let subtract:number  = hint.length;

  for(let i = 0; i <= answer.length -1; i++){
    score = reflectItem[i].textContent == answer[i] || reflectItem[i].textContent == "F" ? score + 1: score;
  }

  return score - subtract;
}

export default scoreCount;