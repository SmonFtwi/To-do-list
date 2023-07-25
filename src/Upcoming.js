
function y(){
    const pageContent = document.querySelector('.pageContent');
    const hi= document.createElement('h1');
    hi.textContent='hello'
    pageContent.appendChild(hi);

}

export default y;