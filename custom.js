$(function(){
    $('.mgrid').hover(function(){
        $('.sub').toggle();
    });
let str = '';
        for(let i=0; i<10; i++){
          let n = i+1;
          str +='<li>';
          str+= '<a href="#">';
          str+=  '<img src="images/eb13.jpg" alt="001">';
          str+=    '<p class="pop-content">';
          str+=       '<span>'+n+'</span>';
          str+=    " '파리의 연인' 심성원, 방광염 투병 중 별세... 향년 85세 ";
          str+=  '</p>';
          str+=  '<p class="pop-info">여성시대 카페</p>';
          str+=  '<p class="pop-comment">덧글 <span>34</span></p>';
          str+=  '</a>';
          str+= '</li>';
        }
        $('.list-pop').html(str);

});

