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

const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const subjectInput = document.getElementById('subjectInput');
const messageTextarea = document.getElementById('messageTextarea');
const emailLink = document.getElementById('emailLink');

nameInput.addEventListener('input', updateEmailLink);
emailInput.addEventListener('input', updateEmailLink);
subjectInput.addEventListener('input', updateEmailLink);
messageTextarea.addEventListener('input', updateEmailLink);

function updateEmailLink() {
    const recipientEmail = 'am.picard03@gmail.com'; // Replace with the actual recipient email address
    const name = encodeURIComponent(nameInput.value);
    const email = encodeURIComponent(emailInput.value);
    const subject = encodeURIComponent(subjectInput.value);
    const body = encodeURIComponent(`Dear Recipient,\n\n${messageTextarea.value}\n\nBest regards,\n${name}`);
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}&from=${name}%20<${email}>`;
    emailLink.href = mailtoLink;
}
