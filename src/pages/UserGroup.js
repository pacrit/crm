import Menu from "./Menu"
function UserGroup() {
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