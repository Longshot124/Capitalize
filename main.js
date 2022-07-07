var btn = document.getElementById('btn');

btn.onclick = () =>{

  var firstLetter = document.getElementById('input').value.slice(0,1).toUpperCase();
  var text = document.getElementById('input').value.slice(1).toLowerCase();
  document.getElementById('result').innerHTML = firstLetter+text

}