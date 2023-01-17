// Add your code here

const configurationObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
    })
}

// fetch('http://localhost:3000/dogs', configurationObject)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert("Ooo stinky!");
//         console.log(error.message);
//     });

function submitData (name, email) {
    return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        "name": name,
        "email": email
    })
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        document.querySelector('body').append(object.id)
    })
    .catch(function (error) {
        document.querySelector('body').append(error.message)
    })
}