// /**
//  * @function addFilm
//  * @param  {string} name
//  * @param  {string} director
//  * @param  {number} released
//  */
// function createFilm(name, director, released){
//     var film = {
//         name: name,
//         director: director,
//         released: released
//     }

//     return film;
// }


// function forEachElem(arr, func) {
//     for (var i = 0; i < arr.length; i++){
//         func(arr[i])
//     }
// }

// var films = []
// films.push(createFilm('Finding Nemo', 'Andrew Stanton and Lee Unkrich', 2003))
// films.push(createFilm('The Truman Show', 'Peter Weir', 1998))
// films.push(createFilm('The Usual Suspects', 'Bryan Singer', 1995))

// forEachElem(films, function(film) {
//     console.log(film.released)
// })







function createTask(title, completed) {
    var task = {
        title: title,
        completed: completed
    }
    return task;
}

function forEachElem(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}


rl.on('line', function (input) {

var tasks = [];

tasks.push(createTask("buy milk", false));
tasks.push(createTask("walk dog", true));

console.log('Task List:')


var input = 'add walk cat';
var inputArr = input.split(' ');
var description = inputArr.slice(1).join(' ');
tasks.push(createTask(description, false));





    forEachElem(tasks, function (task, index) {
    console.log((index + 1) + '. ' + task.title + '. Completed: ' + task.completed)
});



function toggle(index){
    if(!tasks.length){
        console.log('There are no tasks to toggle.')
    } else if(tasks[index - 1].completed){
        tasks[index - 1].completed = false
    } else if (!tasks[index - 1].completed){
        tasks[index - 1].completed = true
    } 
    return tasks
}  


// var input = 'toggle 0'
// var inputArr = input.split(' ')

// if (inputArr[0] === 'toggle') {
//     var index = Number(inputArr[1])
//     if (tasks[index] === undefined){
//       console.log('an element at that index does not exist')
//     } else {
//       toggleCompleted(index)
//     }
//   }



// console.log('-----------')

// console.log(tasks)

