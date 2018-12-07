function sayHello(name){
    helloBox = document.getElementById('hello-box');
    if(name){
        helloBox.innerHTML = 'Hello, ' + name +'.';
    } else {
        helloBox.innerHTML = 'Hello, world!';
    }
    
}

function submitBtn(){
    inputName = document.getElementById('name').value;
    sayHello(inputName);
}