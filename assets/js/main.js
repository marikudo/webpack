'use strict';
import swal from 'sweetalert';
import Swiper from 'swiper';
import 'bootstrap';
import '../scss/style.scss';
(function($) {
  $(function() {

   $("#click").on('click',function(){
   		var inputVal = $('#testing').val();
   		swal(inputVal)
   })

   var swiper = new Swiper('.swiper-container');

  });
})(jQuery);