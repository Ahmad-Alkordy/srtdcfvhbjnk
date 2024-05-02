document.getElementById("video1").addEventListener("click", function() {
    alert("will be redirected to video number one");
});
document.getElementById("video2").addEventListener("click", function() {
    alert("will be redirected to video number two");
});
document.getElementById("video3").addEventListener("click", function() {
    alert("will be redirected to video number three");
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