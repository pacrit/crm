import { useEffect } from "react"
import Menu from "./Menu";
function Tasks() {
    useEffect(() => {
        localStorage.getItem('theme')
    }, []);
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