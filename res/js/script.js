function buttonclick() {
  if (document.getElementById('a1').style.display == 'none') {
    document.getElementById('a1').style.display = 'block';
    document.getElementById('a2').style.display = 'block';
    document.getElementById('more').style.display = 'none';
    document.getElementById('smaller').style.display = 'block';
  }else{
    document.getElementById('a1').style.display = 'none';
    document.getElementById('a2').style.display = 'none';
    document.getElementById('more').style.display = 'block';
    document.getElementById('smaller').style.display = 'none';
  }
}

function review() {
  if (document.getElementById('write').style.display == 'none') {
    document.getElementById('write').style.display = 'block';
  }else{
    document.getElementById('write').style.display = 'none';
  }
}
