//Signup
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            //clear form
            signupForm.reset();

            //close Modal
            $('#signupModal').modal('hide');
            console.log('sign up');
        });
});

//Signin
const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    auth
    .signinWithEmailAndPassword(email, password)
    .then(userCredential => {
        //clear the form
        signupForm.reset();

        //close the Modal
        $('#signinModal').modal('hide');

        console.log('sign');
    })
});

//Logout
const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('sign out');
    });
})