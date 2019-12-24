if (sessionStorage.getItem('AuthenticationState') === null) {
    window.open("login.html", "_self");
}
// else{
//     window.open("AccessDenied.html", "_self");
// }