  
  let descrpt = document.getElementById('new-task-description')
  let formbtn = document.getElementById('submiit')
  let uls = document.getElementById('tasks')
  
  formbtn.addEventListener("submit" , ()=> {
      
      let namelist = document.createElement('li')
      namelist.innerText = descrpt.value
      uls.appendChild(namelist)
      e.preventDefault(n)
   })
   
