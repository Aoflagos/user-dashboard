document.addEventListener("DOMContentLoaded", function() {
    const sidenav = document.querySelectorAll(".sidenav");
    const sidenavInstance = M.Sidenav.init(sidenav);
  });

  /**inputs */
  
  $(document).ready(function() {
    M.updateTextFields();
  });


  /**profile tabs */

   

  $(document).ready(function(){
    $('.tabs').tabs();
  });