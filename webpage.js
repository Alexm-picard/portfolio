const sections= document.querySelectorAll('.section')
const sectBtns= document.querySelectorAll('.controlls')
const sectBtn= document.querySelectorAll('.control')
const allSections= document.querySelector('.main-content')

function PageTransitions(){
    //button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace(' active-btn', '');
            this.className += ' active-btn';
        })
    }
    //sections active class
    allSections.addEventListener('click', (e) => { 
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other sections
            sections .forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })
    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element=document.body;
        element.classList.toggle('light-mode');
        let iconElement = document.querySelector('.theme-btn i');

    // Change the icon based on the current theme
        iconElement.classList.toggle('fa-cloud-sun');    
        iconElement.classList.toggle('fa-cloud-moon');    
        
        
    })
}

PageTransitions();
const blogDivs = document.querySelectorAll('.blog');
const textBlogDivs = document.querySelectorAll('.click-items');
let hiddenBlogDiv = null;

// Add click event listener to each blog div
blogDivs.forEach(blogDiv => {
  blogDiv.addEventListener('click', () => {
    if (hiddenBlogDiv) {
      // Revert the previously hidden blog div back to normal
      hiddenBlogDiv.style.opacity = 1;
      hiddenBlogDiv.style.pointerEvents = 'auto';
      hiddenBlogDiv.classList.remove('revealed');
    }

    if (hiddenBlogDiv !== blogDiv) {
      // Hide the currently clicked blog div
      blogDiv.style.opacity = 0;
      blogDiv.style.pointerEvents = 'none';
      blogDiv.classList.add('revealed');
      hiddenBlogDiv = blogDiv; // Update the hidden blog div reference
    } else {
      hiddenBlogDiv = null; // Clear the hidden blog div reference
    }
  });
});
textBlogDivs.forEach(textBlogDiv => {
    textBlogDiv.addEventListener('click', () => {
      if (hiddenBlogDiv) {
        // Revert the previously hidden blog div back to normal
        hiddenBlogDiv.style.opacity = 0;
        hiddenBlogDiv.style.pointerEvents = 'none';
        hiddenBlogDiv.classList.add('revealed');
        
      }
  
      if (hiddenBlogDiv !== textBlogDiv) {
        // Hide the currently clicked blog div
        textBlogDiv.style.opacity = 1;
        textBlogDiv.style.pointerEvents = 'auto';
        textBlogDiv.classList.remove('revealed');
        hiddenBlogDiv = textBlogDiv; // Update the hidden blog div reference
      } else {
        hiddenBlogDiv = null; // Clear the hidden blog div reference
      }
    });
  });
