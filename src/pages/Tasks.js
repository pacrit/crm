import Menu from "./Menu";
function Tasks() {
    return (
        <div style={{ display: 'flex' }}>
            <Menu />
            <div style={{ float: 'right', marginLeft: '1em' }}>
                <h3>Tarefas</h3>
            </div>
        </div>
    )
}
export default Tasks