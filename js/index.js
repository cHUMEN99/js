document.getElementById('myform').addEventListener('submit',function(e){
    e.preventDefault();

    var el=document.getElementById('myform');

    let name=el.name.value;
    let email=el.email.value;
    let password=el.password.value;
    let eror='';
    
    if (name.length<2) {
        eror="Імя має містити більще 2 символів "
        
    }
    else if (email.length<2) {
        eror="email має містити більще 2 символів "
        
    }
    else if (!email.includes('@') ) {
        eror="email має містити @  "
        
    }

    else if(password.length<2){
        eror="Пароль має містити більше 2 символів "
    }
    
    if (eror !=''){
        document.getElementById('eror').innerText=eror;
        return false;
    }


     

    alert("Вітаю ви зареєструвались ")
    window.location.href = "http://127.0.0.1:8000/about/";
    return false;
});



