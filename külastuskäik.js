var newWin;
    function ava_leht()
    {
     newWin= window.open('https://reporter.postimees.ee/3505123/agedad-arikaksikud-otsivad-oma-orjaks-suguhaigeid-ajukaabikuid','Link lehele','width=1000, height=1000');

     document.onmousedown=focusPopup;
     document.onkeyup=focusPopup;
     document.onmousemove=focusPopup;
    }
    function focusPopup(){
      if(!newWin.closed){
        newWin.focus();
      }
    }