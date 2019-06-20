class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");
    // toggle effects
    // this.autoClose = element.dataset.autoClose === 'true' ? true : false
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () =>  {
      this.toggleContent();
      // this.toggleOn();
      this.open1 = TweenLite.set(".dropdown-content",{minHeight:'20%',height:'auto'});
      this.open2 = TweenLite.from(".dropdown-content",1.5,{minHeight:0,height:0});
      this.openFade = TweenLite.from(".dropdown-link", 1.5, {opacity:0, delay:1.5});
      // this.close1 = TweenLite.to(".dropdown-content",2,{minHeight:0,height:0});
      // this.close2 = TweenLite.from(".dropdown-content",{minHeight:'20%',height:'auto'});
      // this.closeFade = TweenLite.to(".dropdown-link", 1, {opacity:0, delay:1});
    });

  }
    
  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle("dropdown-hidden");

  };

  // toggleOn() {
  //       TweenLite.set(".dropdown-content",{minHeight:'20%',height:'auto'});
  //       TweenLite.from(".dropdown-content",2,{minHeight:0,height:0});
  //       TweenLite.from(".dropdown-link", 2, {opacity:0, delay:1.5});
  //       const close1 = TweenLite.to(".dropdown-content",2,{minHeight:0,height:0});
  //       const close2 = TweenLite.from(".dropdown-content",{minHeight:'20%',height:'auto'});
        
  // }
 

};




// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown')
dropdowns.forEach( dropdown => new Dropdown(dropdown));

///GSAP styling for dropdown



