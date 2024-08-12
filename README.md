# To-Do List Application

This is a simple web-based To-Do List application that allows users to add, delete, and manage tasks efficiently. The application also provides a feature to download the current list of tasks as a `.txt` file with a timestamped filename, making it easy to keep records of tasks.

## Features

- **Add Tasks**: Users can add tasks by entering text in the input field and clicking the "Add Task" button or pressing the Enter key.
- **Delete Tasks**: Each task has a "Delete" button that allows the user to remove individual tasks from the list.
- **Mark Tasks as Completed**: Users can click on a task to toggle its completed state, helping them keep track of what's done and what's pending.
- **Delete All Tasks**: The "Delete All" button clears the entire task list.
- **Download Task List**: The "Download" button generates a `.txt` file containing the current tasks, with a filename that includes the current date and time.

## Technologies Used

- **HTML**: Provides the structure of the application.
- **CSS**: Styles the application to make it visually appealing.
- **JavaScript**: Handles the application's interactivity, including adding, deleting, and managing tasks, as well as downloading the task list.

## How to Use

1. **Add a Task**: Enter the task description in the input field and click "Add Task" or press the Enter key.
2. **Delete a Task**: Click the "Delete" button next to any task to remove it from the list.
3. **Mark as Completed**: Click on any task (except the delete button) to mark it as completed. Click again to unmark.
4. **Delete All Tasks**: Click the "Delete All" button to remove all tasks from the list.
5. **Download Task List**: Click the "Download" button to save the current task list as a `.txt` file. The file will be named in the format `todo_list_dd-mm-yyyy_hh:mm:ss.txt`.

## Project Structure

```plaintext
├── index.html       # The main HTML file that structures the web page
├── style.css        # CSS file for styling the application
└── script.js        # JavaScript file that adds functionality to the application
```
## Setup

To use this application, simply download the repository and open index.html in any modern web browser.

## Future Enhancements

Local Storage Integration: Store the tasks in the browser's local storage to persist them across page reloads.
Edit Task Functionality: Allow users to edit tasks after they've been added.
Task Prioritization: Implement a feature to prioritize tasks and sort them accordingly.
## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions for improvements or new features.
