let alerts = [
    { key: 'LowerAlpha', value: (pass) => /[a-z]/.test(pass) },
    { key: 'UpperAlpha', value: (pass) => /[A-Z]/.test(pass) },
    { key: 'Character', value: (pass) => /[!@#$%^&*(),.?":{}|<>;%'\\[\]\\/`~\-+=_]/.test(pass) },
    { key: 'Number', value: (pass) => /[0-9]/.test(pass) },
    { key: 'Strong', value: (pass) => isStrong(pass) }
];




let input = document.getElementById('input');

input.addEventListener('input', () => {
    alerts.forEach(alert => {
        let error = document.getElementById(alert.key).style;
        error.display = alert.value(input.value) ?
            'block' : 'none';
    });
});



function isStrong(pass){
    const hasLower = /[a-z]/.test(pass);
    const hasUpper = /[A-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>;%'\\[\]\\/`~\-+=_]/.test(pass);
    return hasLower && hasUpper && hasNumber && hasSpecial;
}