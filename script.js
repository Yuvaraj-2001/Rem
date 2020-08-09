var q = JSON.parse(window.localStorage.getItem('list'));
function add(){
   document.getElementById('listing').style.display = 'none';
   document.getElementById('viewlist').style.display = 'block';
   document.getElementById('lishow').style.display = 'none';
}

function savel(){
  var n =  document.getElementById('name').value;
   if(q == undefined){
        var listall = []
    }else{
        var listall = JSON.parse(window.localStorage.getItem('list'));
        
    }
    console.log(listall)
    if(n == '' || n == " "){
      alert(`Please enter your list. List can't be empty`);
    }else
    {
      var add = {name: n
      }
      listall.push(add);
      
      console.log(listall);
      var listall = window.localStorage.setItem('list', JSON.stringify(listall)); 
      document.getElementById('viewlist').style.display = 'none';
      document.getElementById('listing').style.display = 'block';
      document.getElementById('name').value = '';
      showopt();
    }

}

function showopt(){
    var opt = JSON.parse(window.localStorage.getItem('list'));
    var txt = '';
    var i = 0;
    for(var i = 0; i < opt.length; i++){
        txt += '<button class="btn btn-primary" onclick="lishow('+i+')">'+opt[i].name+'</button> &nbsp'
    }
    document.getElementById('listall').innerHTML = txt;
    document.getElementById('editli').style.display = 'none';
    document.getElementById('viewlist').style.display = 'none';
    document.getElementById('newlhide').style.display = 'block';
    document.getElementById('listing').style.display = 'block';
    // console.log(opt);
}
function lishow(j){
    document.getElementById('lishow').style.display = 'block';
    document.getElementById('libutton').innerHTML = "<button class='btn btn-primary btn-block' onclick='store("+j+")'>Submit</button><br>";
    document.getElementById('libutton').innerHTML += "<button class='btn btn-danger btn-block' onclick='showopt();'>Cancel</button> "
    var opt = JSON.parse(window.localStorage.getItem('list'));
    var  txt = opt[j].name;
    var b =  JSON.parse(window.localStorage.getItem(txt))
    document.getElementById('lilab').innerHTML = 'Your list view of '+txt+'<span class="fa fa-trash f-r" style="color: red" onclick="deletelist('+j+')"></span>  ';
    if( b == undefined){
      var listall = []
  }else{
    var listall = JSON.parse(window.localStorage.getItem(txt));
  }
   console.log(listall);
   window.localStorage.setItem(txt, JSON.stringify(listall));
   var q = JSON.parse(window.localStorage.getItem(txt))
  var val = '';
  
    val += '<ul class="list-group">'
      for(var i = 0; i < q.length; i++){
      val += '<li class="list-group-item d-flex justify-content-between align-items-center c-b"> '+q[i]+'<span onclick="removelist('+j+","+i+');" class="badge badge-danger badge-pill">X</span></li>';
    }
    val += '</ul>'
  
  document.getElementById('storeli').innerHTML = val;
}
function deletelist(j){
  var list = JSON.parse(window.localStorage.getItem('list'));
  var del = list[j].name;
  if (confirm("Are you sure you want to delete all record of {{ "+del+" }} list!")) {
    txt = "You pressed Cancel!";
    list.splice(j, 1);
    window.localStorage.removeItem(del);
    window.localStorage.setItem('list', JSON.stringify(list)); 
    document.getElementById('lishow').style.display = 'none';
    showopt(); 
  } else {
    
  }
}
function removelist(list, num){
  var localStorageValue = JSON.parse(window.localStorage.getItem('list'));
  debugger
  var s = localStorageValue[list].name;
  console.log(s);
  var listvalue = JSON.parse(window.localStorage.getItem(s));
  listvalue.splice(num, 1)
  window.localStorage.setItem( s, JSON.stringify(listvalue));
  console.log(listvalue);
  lishow(list);  
}
function storeopt(){
   
    document.getElementById('newlhide').style.display = 'none';
    document.getElementById('libutton').style.display = 'block';
    var e = document.getElementById('editli');
    e.style.display = 'block';
   
}
function store(j){
  var opt = JSON.parse(window.localStorage.getItem('list'));
  var  txt = opt[j].name;
  var l = j;
  var text = document.getElementById('create').value;
  var q = JSON.parse(window.localStorage.getItem(txt));
  if(text == '' || text == " "){
    alert(`Please enter your list. List can't be empty`);
  }else{
  q.push(text);
  var val = '';
    val += '<ul class="list-group">';
    console.log(j);
      for(var i = 0; i < q.length; i++){
        val += '<li class="list-group-item d-flex justify-content-between align-items-center c-b"> '+q[i]+'<span onclick="removelist('+j+","+i+');" class="badge badge-danger badge-pill">X</span></li>';
     }
    val += '</ul>'
  document.getElementById('storeli').innerHTML = val;
  document.getElementById('lishow').style.display = 'block';
  document.getElementById('editli').style.display = 'none';
  document.getElementById('newlhide').style.display = 'block';
  document.getElementById('create').value = '';
  window.localStorage.setItem( txt, JSON.stringify(q));
  }
}