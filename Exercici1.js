'use strict'

function getInfo(){
    var student = {
        name: 'Anastasia',
        surname: 'Potapova',
        course: 'Node.js'
    };

    return new Promise((resolve, reject) => {
        var studentInfo = JSON.stringify(student); //para leer bien el objeto con sus valores

        if(typeof studentInfo != 'string')
        return reject('Message error');

        return resolve(studentInfo);
    });
}

getInfo().then((data)=> console.log(data));


