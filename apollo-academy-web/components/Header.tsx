import react from 'react';
import { NavBar } from './NavBar';

interface headerProps {}

export const Header : React.FC<headerProps> = ({}) => {
    return(
        <>
            <NavBar/>
        </>
    )
}