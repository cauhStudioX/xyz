
/*Collapse*/
function show() {
    var show = document.getElementById('grow');
    if (show.clientHeight) {
        show.style.height = 0;
    } else {
      var wrapper = document.querySelector('.measuringWrapper');
      show.style.height = wrapper.clientHeight + "px";
    }
    document.getElementById("more-button").value = document.getElementById("more-button").value == 'Read more' ? 'Read less' : 'Read more';
  }
function collapse(self){
    var classN ='foreground fontsize_d mon trigger'
    if(self.className == classN)
    {
      self.className = 'foreground fontsize_d mon';
      show();
    }
    else
    {
      self.className = 'foreground fontsize_d mon trigger';
        show();
    }

}





  /*button*/
  function button(self)
  {
    var bg = document.querySelector('#ex');
    var but = document.querySelector('#ec'); 
    var li1 = document.querySelector('#list_1'); 
    var li2 = document.querySelector('#list_2'); 

    if(bg.className == 'bg-default')
    {
        bg.className = 'bg-color'; //배경
        self.className = 'custom-btn btn-12' //체인지 버튼
    }
    else
    {
        bg.className = 'bg-default';
        self.className = 'custom-btn btn-11'
    }
  }
