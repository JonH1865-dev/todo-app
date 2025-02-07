export function Header(props) {
    const {todos} = props
    const numberofTasks = todos.length
    const isTasksPlural = todos.length != 1
    const taskOrTasks = isTasksPlural ? 'tasks' : 'task'
    
    return(
        <header>
            <h1 className="text-gradient">You have {numberofTasks} open {taskOrTasks}.</h1>
        </header>
    )
}