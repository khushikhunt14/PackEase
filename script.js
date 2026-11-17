const themeBtn = document.getElementById('themeBtn');
if(themeBtn){
  themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    themeBtn.textContent=document.body.classList.contains('dark')?'☀️':'🌙';
  });
}

const form=document.querySelector('form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Thank you! Your request has been submitted.');
    form.reset();
  });
}