const users = [
    {
        username: 'admin',
        password: 'admin123'
    },
    {
        username: 'spencer24',
        password: '24spencer'
    }
];

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users));
}

function login() {
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error');
    const storedUsers = JSON.parse(localStorage.getItem('users'));

    // LOGIC
    const user = storedUsers.find(user => user.username === username && user.password === password);

    if (user) {
        errorMsg.innerHTML = '';
        alert('Login successful!');
        window.location.href = '/src/main/main.html';
    } else {
        errorMsg.innerHTML = 'Invalid username or password.';
    }
}


function logout() {
    localStorage.clear();

    alert("You have been logged out!");
    window.top.location.href = '/src/login.html';
}

