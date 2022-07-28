const NextQuestion = (hideCard, answerTarget, setClass) => {

  new Promise((resolve, reject) => {
    hideCard.classList.add('animate__flipOutX');
    answerTarget.classList.add('answer__target--open');
    resolve(null);
  })
  .then(() => {
    setTimeout(() => {
      hideCard.classList.remove('animate__flipOutX');
      answerTarget.classList.remove('answer__target--open');
      for(let i = 0; i < setClass.length; i++){
        setClass[i].textContent = null;
        setClass[i].classList.remove('answer__reflectItem--set','animate__rubberBand');
        setClass[i].classList.add('notInsert');
      }
    }, 1600);
  })
}

export default NextQuestion;