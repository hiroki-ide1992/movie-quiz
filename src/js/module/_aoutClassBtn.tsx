const AnimateCSS = (element:string, animation:string, prefix = 'animate__') => {

  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelectorAll(element);

    function handleAnimationEnd (event) {
      event.stopPropagation();
      this.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    for(let i = 0; i <= node.length -1; i++ ){
      node[i].classList.add(`${prefix}animated`, animationName);
      node[i].addEventListener('animationend', handleAnimationEnd, {once: true});
    }
  });
}

export default AnimateCSS;