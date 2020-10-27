module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirm_password
) => {
    const errors ={};
    if(username.trim() === ''){
        errors.usernmae = 'username must not be empty';
    }
    if(email.trim() === ''){
        errors.usernmae = 'email must not be empty';
    } else {
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            errors.email = 'Email must be a valid one';
        }
    }
    if(password === ''){
        errors.password = 'password must not be empty'
    } else if(password !== confirm_password){
        errors.confirm_password = 'passwords must match';
    }
    return {
        errors, 
        valid: Object.keys(errors).length <1
    }
}

module.exports.validateLoginInput = (username, password) =>{
    const errors ={};
    if(username.trim()===""){
        errors.username = 'Username must not be empty';
    }
    if(password.trim() ===""){
        errors.password = 'password must not be empty'
    }
}