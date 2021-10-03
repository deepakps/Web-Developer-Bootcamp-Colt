let input = prompt('What would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box', 'Walk the Dog', 'Walk the Cat'];
while (input.toLowerCase() !== "quit" || input.toLowerCase() !== "q") {
    if (input.toLowerCase() === 'list') {
        console.log('**********************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i + 1}: ${todos[i]}`);
        }
        console.log('**********************');
    } else if (input.toLowerCase() === 'new') {
        const newToDo = prompt('Ok, what is new to do?');
        todos.push(newToDo);
        console.log(`${newToDo} added to the list}`);
    } else if (input.toLowerCase() === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index - 1, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unkown index');
        }

    }
    input = prompt('What would you like to do?');
}

console.log("Ok! Quit the app!");