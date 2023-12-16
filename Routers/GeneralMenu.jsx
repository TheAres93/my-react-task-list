import { Link } from 'react-router-dom';
import { Button, ButtonGroup, useColorMode } from '@chakra-ui/react'

export default function GeneralMenu() {
  const {colorMode}=useColorMode()
  return (
    <nav>
      <ButtonGroup >
        <Button colorScheme='ghost'
        color={colorMode==="light"?"black":"white"}><Link to="/">Inicio</Link></Button>
        <Button colorScheme='ghost'
        color={colorMode==="light"?"black":"white"}><Link to="/AddTasks">Agregar Tarea</Link></Button>
        <Button colorScheme='ghost'
        color={colorMode==="light"?"black":"white"}><Link to="/TasksList">Tareas</Link></Button>
        <Button colorScheme='ghost'
        color={colorMode==="light"?"black":"white"}><Link to="/AboutUs">Acerca de Nosotros</Link></Button>
      </ButtonGroup>
    </nav>
  );
}

