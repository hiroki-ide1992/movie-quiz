const InsertText = (element:any, clickText:string, addAnimate:any) => {

  element.innerHTML = clickText;
  element.classList.add('answer__reflectItem--set','animate__rubberBand');
  element.classList.remove('notInsert');
  addAnimate.forEach(element => {
    element.classList.remove('animate__flipInX');
  });
}

export default InsertText;