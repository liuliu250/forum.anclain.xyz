
const loginBtn = document.getElementById('login_btn')
const registryBtn = document.getElementById('registry_btn')

function getBody() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    return { username, password }
}

function fetchData(url, body) {
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(body)
    })
}

async function fetchUser() {
    const response = await fetch('https://anclain.xyz:3000/users')
    const data = await response.json()
    const userList = document.getElementById('userList')
    userList.innerHTML = data.users.map(item => `<div>${item}</div>`).join('')
}
fetchUser()

loginBtn.addEventListener('click', async () => {
    const body = getBody()
    const response = await fetchData('https://anclain.xyz:3000/login', body)
    const data = await response.json()
    const loginUsernName = document.getElementById('loginUsernName')
    loginUsernName.innerText = data.username
})

registryBtn.addEventListener('click', async () => {
    const body = getBody()
    const response = await fetchData('https://anclain.xyz:3000/registry', body)
    const data = await response.json()
})