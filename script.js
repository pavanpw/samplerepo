$(document).ready(function () {
  var data = "Hello you clicked button";
  var myname = "hello";
 function getNot(){
    data = "Modified notification data";
   alert("Printing inside alert: "+data);
 }
//  $(".show_not").click(function(){
//   getNot();
//   alert(data);
//  });
  // console.log(data);
  
 getNot();
 alert("out of scope: "+data);

});
