var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');

for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
      event.preventDefault();
      var sectionNameId=this.textContent.trim().toLowerCase();
      var targetSection=document.getElementById(sectionNameId);
      
      var scrollingInterval=setInterval(function(){
        var sectionCordinates=targetSection.getBoundingClientRect();
        if(sectionCordinates.top<=0){
            clearInterval(scrollingInterval);
            return;
        }
        window.scrollBy(0,50);
      },20);
    });
    


}

// SkillsSectionPorgress

var progressBar=document.querySelectorAll('.skill-progress > div'); //got the div
var skillsSection=document.getElementById('skillsContainer');
window.addEventListener('scroll',checkScroll);
var animation=false;

function initialiseBars(){
    for(let bar of progressBar){
      bar.style.width= 0 + '%';  
    }
}
initialiseBars()
function fillbars(){
    for(let bar of progressBar){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth=0;
        let interval=setInterval(function(){
            if(currentWidth>targetWidth){
              clearInterval(interval);
              return;  
            }
            currentWidth++;
            bar.style.width= currentWidth + '%';

        },10);
    }

     
}

function checkScroll(){
    var skillCordinates=skillsSection.getBoundingClientRect();
    if(!animation && skillCordinates.top<= window.innerHeight){
        animation=true;
        console.log('Skills bar visibile');
        fillbars();
    }else if(skillCordinates.top>window.innerHeight){
       animation=false;
       initialiseBars();
    }
}
