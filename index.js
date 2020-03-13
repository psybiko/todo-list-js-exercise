// A new task will be created as incomplete
// Object with task, desciption and complete states
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,


    // this refers to the state outside the function
    // Print the state of a task to the console in a nice readable way
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    // Mark a task as complete by setting the task's status to true
    markCompleted: function() {
      this.complete = true;
    },
  };

  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// for now, let's just make sure we see our tasks
task1.logState(); // passes task1 to logState function
task1.markCompleted(); // passes task1 to markCompleted function, which then marks the task as completed to be true
task1.logState(); // passes the newly completed task to logState function which then says that the task is complete

