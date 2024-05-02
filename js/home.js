$(document).ready(function() {
    var currentImageIndex = 1;
  
    function showImage(index) {
      $(".car-picture").hide();
      $("#impala-picture-" + index).show();
    }
  
    showImage(currentImageIndex);
  
    $("#impala-picture-1, #impala-picture-2, #impala-picture-3").click(function() {
      var index = $(this).attr("id").split("-")[2];
      showImage(index);
      currentImageIndex = index;
    });
  
    $("#previous-image-button, #next-image-button").click(function(event) {
      event.preventDefault();
      var newIndex;
      if ($(this).attr("id") === "previous-image-button") {
        newIndex = currentImageIndex - 1;
        if (newIndex < 1) {
          newIndex = 3;
        }
      } else {
        newIndex = currentImageIndex + 1;
        if (newIndex > 3) {
          newIndex = 1;
        }
      }
      showImage(newIndex);
      currentImageIndex = newIndex;
    });
  });
  


  document.getElementById("purchase").addEventListener("click", function(event){
    const form = document.getElementById("validate");
    const carnum = document.getElementById("numcars");
  
    if(carnum.value === ""){
      form.style.display='block';
      event.preventDefault();
    }
    setTimeout(function(){
      form.style.display='none';
    }, 2000);
  });

  document.getElementById("show-more").addEventListener("click", function() {
    const element = document.getElementById("impala-specs");
    const show = document.getElementById("show-more");
    if(element.style.display === 'none'){
      element.style.display ='block';
      show.textContent='show less';
    }else{
      element.style.display ='none';
      show.textContent='show more';
    }
});

document.getElementById("submit").addEventListener("click",function(){
var Name = $('#namefeedback').val();
  var comment = $('#commentfeedback').val();
  var rating = $('#rating').val();

  localStorage.setItem('namefeedback', Name);
  localStorage.setItem('commentfeedback', comment);
  localStorage.setItem('rating', rating);



  alert('Name: ' + localStorage.getItem('Name') +
   '\nyour feedback: ' + localStorage.getItem('comment') +
   '\nrating: ' + localStorage.getItem('rating'));
});