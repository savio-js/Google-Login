
function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential)

  fullName.textContent = data.name
  sub.textContent = data.sub
  givenName.textContent = data.given_name
  familyName.textContent = data.family_name
  email.textContent = data.email
  verifiedEmail.textContent = data.email_verified 
  picture.setAttribute("src", data.picture)

}
window.onload = function () {
  google.accounts.id.initialize({
    client_id:"19789482162-0osav27kcavkpcm7fbvkt8v2524frjqr.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}
