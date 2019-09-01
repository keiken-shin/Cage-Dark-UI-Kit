//ALERT DISMISSAL

const alertClose = document.getElementsByClassName('close');
// const alertCont = document.getElementsByClassName('alert');

Object.entries(alertClose).map(( object ) => {
  // Here, object = Array[index, object] (object is the
  // HTML element object). This means that the actual element
  // is stored in object[1], not object. Do whatever you need
  // with it here. In this case we attach a click event:
  object[1].addEventListener("click", function(){ 
    this.parentElement.remove();
  });
});