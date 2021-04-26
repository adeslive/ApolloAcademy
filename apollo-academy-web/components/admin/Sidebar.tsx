import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

const SideBar = () => {
    const router = useRouter();
    return (
        <aside>
            <h1>Administracion</h1>
            <Button bg="#D7933A" margin="5px" width="100%" onClick={() => router.push('/admin/language')}> Agregar Idioma</Button>
            <Button bg="#D7933A" margin="5px" width="100%" onClick={() => router.push('/admin/course')}> Agregar Curso </Button>
            <Button bg="#D7933A" margin="5px" width="100%" onClick={() => router.push('/admin/classrooms')} > Agregar Aula Virtual</Button>
        </aside>
    );
}

export default SideBar;