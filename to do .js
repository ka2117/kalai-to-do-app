function taskadding(){
    var taskcontent = document.getElementById('activities').value.trim()
    console.log(taskcontent)
    
    if(taskcontent !== ""){
       var lielement = document.createElement('li')
       lielement.textContent = taskcontent
       lielement.innerHTML = taskcontent
       lielement.innerText = taskcontent
       document.querySelector('#todo ul').appendChild(lielement)
    }
    else{
        alert("Please enter activities")
    }
}
function removingtask(){
  var todoul = document.querySelector('#todo > ul')
  if(todoul){
    var lilist = document.querySelectorAll('li')
    lilist.forEach(function(li){
        todoul.removeChild(li)
    })
  }
}