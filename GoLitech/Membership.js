// function validation(){
    let loginButton = document.getElementById('login-button')

    loginButton.addEventListener('click', () => {
        let fullname = document.getElementById('full-name').value
        let gender = document.getElementById('gender')
        let email = document.getElementById('email').value
        let address = document.getElementById('address').value
        let phonenum = document.getElementById('phone-num').value
    
        //Kalo kosong
        if(fullname == '' || email == '' || address == '' || phonenum == ''){
            alert('Please input all or the rest of the form!')
            return
        }
    
        //Full Name
        if(fullname.length < 5){
            alert('Please input Full Name atleast 5 characters!')
        }
    
        //Gender
        if(!gender.checked){
            alert('Please choose atleast one option gender!')
            return
        }
    
        //Email
        let x = -23
        for(let i = 0; i < email.length; i++){
            if(email[i] == '@') x = i
        }
    
        if(x == -23){
            alert('Email Invalid!')
            return
        }
    
        let y = email.length
        let ends= email.substring(x, y)
        if(ends !== '@gmail.com'){
            alert('Please use @gmail.com')
            return
        }
    
        //Address
        if(address.length < 5){
            alert('Please input atleast 5 characters!')
            return
        }
    
        //Phone number
        if(phonenum.length !== 12){
            alert('Please input number phone atleast 12 characters!')
            return
        }
    
        alert('Your data form has been sent, please wait a moment. You can get more information in your email')
    
    })
// }