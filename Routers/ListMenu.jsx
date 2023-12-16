import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from '@chakra-ui/react'
import Theme from '../src/theme/Theme';
export default function ListMenu() {
  return (
    <nav>
      <ButtonGroup gap='6' theme={Theme}>
        <Button colorScheme='gray'>
          <Link to="/TasksList">Todas</Link>
        </Button>
        <Button colorScheme='gray'>
          <Link to="/TasksList/Complete">Completadas</Link>
        </Button>
        <Button colorScheme='gray'>
          <Link to="/TasksList/Incomplete">Pendientes</Link>
        </Button>
        <Button colorScheme='gray'>
          <Link to="/TasksList/EditOn">Editando</Link>
        </Button>
      </ButtonGroup>
    </nav>
  );
}

