let regNumb = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
    regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    regNumber = /[0-9]/,
    regName = /[A-Za-zА-Яа-я]/
    regPassword = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;

    let inp = document.querySelector('#name');
    let span = document.querySelector('.span');

    document.querySelector('.btn').onclick = function(e)
    {
        e.preventDefault();
        if(!reg.test(inp.value) )
        {

        }
    }
    function validate(regex, inp)
    {
        return regex.test(inp);
    }
    function validateNumb(regNumb, inp)
    {
        return validate(regNumb, inp);
    }

    function validateEmail(regEmail, inp)
    {
        return validate(regEmail, inp);
    }

    function validateNumber(regNumber, inp)
    {
        return validate(regNumber, inp);
    }
    
    function validateName(regName, inp)
    {
        return validate(regName, inp);
    }

    