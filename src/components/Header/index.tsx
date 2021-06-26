import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Header(){

    const currentDate = format(new Date(), 'EEEEEE,d MMMM', {
        locale: ptBR,
    });

    return(

        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podecastr"/>
            
            <p> <b>RocketSeat: Resultado da Next Level Week<br /> Desenvolvido por: Pablo Azevedo  - Pixel e Arte </b> 
            <br /> </p>
            <span>{currentDate}</span>
        </header>

    );

}