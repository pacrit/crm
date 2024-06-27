import { useEffect } from "react"
import Menu from "./Menu"
function UserGroup() {
    useEffect(() => {
        localStorage.getItem('theme')
    }, []);
    return (
        <div style={{ display: 'flex' }}>
            <Menu />
            <div style={{ float: 'right', marginLeft: '1em' }}>
                <h3>Grupo de usuários</h3>
            </div>
        </div>
    )
}
export default UserGroup