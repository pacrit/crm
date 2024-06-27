import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import DocPassIcon from '@rsuite/icons/DocPass';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import CreativeIcon from '@rsuite/icons/Creative';
import OffIcon from '@rsuite/icons/Off';
import { useNavigate } from 'react-router-dom';


function Menu() {
    const [expanded, setExpanded] = React.useState(false);
    const [activeKey, setActiveKey] = React.useState('1');
    const [theme, setTheme] = React.useState('light');

    const navToLogin = useNavigate();
    const navToConfig = useNavigate();
    const navToHome = useNavigate();
    const navToGroup = useNavigate();
    const navToTasks = useNavigate();

    const changeTheme = () => {
        setTheme(!theme)
        localStorage.setItem('theme', theme)
    }

    return (
        <div style={{ height: '100vh' }}> {/* Envolva o Sidenav em um div com altura de 100% da viewport */}
            <Sidenav
                expanded={expanded}
                style={{ height: '100%' }} // Defina a altura e largura conforme necessário
            >
                <Sidenav.Body
                    onMouseEnter={() => setExpanded(true)}
                    onMouseLeave={() => setExpanded(false)}
                >
                    <Nav activeKey={activeKey} onSelect={setActiveKey}>
                        <Nav.Item onClick={() => { navToHome('/home') }} eventKey="1" icon={<DashboardIcon />}>
                            Home
                        </Nav.Item>
                        <Nav.Item onClick={() => { navToGroup('/usergroup') }} eventKey="2" icon={<GroupIcon />}>
                            Grupo de Usuários
                        </Nav.Item>
                        <Nav.Item eventKey="3" icon={<MagicIcon />}>
                            Aplicação
                        </Nav.Item>
                        <Nav.Item onClick={() => { navToConfig('/config') }} eventKey="4" icon={<GearCircleIcon />}>
                            Configurações
                        </Nav.Item>
                        <Nav.Item onClick={() => { navToTasks('/tasks') }} eventKey="5" icon={<DocPassIcon />}>
                            Tarefas
                        </Nav.Item>
                        <Nav.Item eventKey="6" icon={<UserInfoIcon />}>
                            Perfil
                        </Nav.Item>
                        <Nav.Item onClick={changeTheme} eventKey="7" icon={<CreativeIcon />}>
                            Modo Dark
                        </Nav.Item>
                        <Nav.Item onClick={() => { navToLogin('/') }} eventKey="8" icon={<OffIcon />}>
                            LogOff
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>

            </Sidenav>
        </div>
    );
};
export default Menu