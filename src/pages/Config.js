import { useEffect } from "react"
import Menu from "./Menu"
function Config() {
    useEffect(() => {
        localStorage.getItem('theme')
      }, []);
    return (
        <div style={{ display: 'flex' }}>
            <Menu />
            <div style={{ float: 'right', marginLeft: '1em' }}>
                <h3>Config</h3>
            </div>
        </div>
    )
}
export default Config