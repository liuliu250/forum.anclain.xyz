const loginBtn = document.getElementById("login_btn");
const registerBtn = document.getElementById("register_btn");
function getBody(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    return { username, password }
}
function fetchData(url, body){
    return fetch(url, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8'
        }),
        body: JSON.stringify(body)
    });
}
loginBtn.addEventListener("click",  async () => {
    const body = getBody();
    // console.log(body);
    const response = await fetchData("http://localhost:3000/login", body);
    const data = await response.json();
})
registerBtn.addEventListener("click",  async () => {
    const body = getBody();
    const response = fetchData("http://localhost:3000/registry", body);
    const data = await response.json();

})