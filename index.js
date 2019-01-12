const api = 'https://en.wikipedia.org/w/api.php?'
const sInput = $('#search-input');


function wikiSearch(forWhat){
  var sUrl = api+'action=query&generator=search&gsrsearch='+forWhat+'&prop=extracts|info&exsentences=1&exintro&inprop=url&format=json&formatversion=2&origin=*';

  $('#testlink').attr('href',sUrl).attr('target',"_blank").html('here!')
  

  $.ajax({
    url: sUrl,
    success:function(result){
      $('.resultsul').html('')
      result.query.pages.forEach(a=>{
        appendResult(a);
      })
    }
  })

  
  
  
}





function inputListeners(){
  sInput.keydown(function(event){
    if(event.which==13){
      wikiSearch(sInput.val())
    }
  })
  document.on('submit',function(e){
    console.log('wwwwww')
    e.preventDefault()
  })
}
inputListeners()

$('body').on('keydown',function(){
  console.log('submitted')
})


function appendResult(result){
  // $('.resultsul').append('')
  // var list=$('.resultsul').last()
  // $(list).append('<a id='+result.pageid+' href=https://en.wikipedia.org/wiki?curid='+result.pageid+'></a>')
  // $(list).append('<label for='+result.pageid+'>'+result.title+'</label>')
  $('#search-label').hide();
  
  $('.resultsul').append('<li class="results" onclick="sendMeTo(`'+result.canonicalurl+'`)"><span></span><div ><h3>'+result.title+'</h3><p>'+result.extract+'</p></div></li>')
}
//+result.pageid+

function sendMeTo(url){
  // var wiki = 'https://en.wikipedia.org/wiki?curid='+pageid;
  window.open(url,'_blank');
}


function searchToggle(){
  $('#search-label').show();
  $('#search-input').toggle().val('')
  $('.resultsul').html('');
  $('.toggle').css('width',$('.toggle').outerWidth()<100?'200px':'30px')
  
}
