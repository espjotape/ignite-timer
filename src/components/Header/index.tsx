import { Moon, Scroll, Sun, Timer } from 'phosphor-react';
import { HeaderContainer, ThemeSwitcher, LogoAndThemeContainer } from './styles';

import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CyclesContext } from '../../contexts/CyclesContext';

export function Header() {
 const { switchTheme, theme } = useContext(CyclesContext);
 
 return(
  <HeaderContainer>
    <LogoAndThemeContainer>
     <img src={logoIgnite} alt="Logotipo Ignite" />
      <ThemeSwitcher type="button" onClick={switchTheme}>
       {theme ? <Sun size={24} /> : <Moon size={24} />}
      </ThemeSwitcher>
    </LogoAndThemeContainer>

   <nav>
    <NavLink to="/" title='Timer'>
     <Timer size={24}/>
     </NavLink>
    <NavLink to="/history" title='Histórico'>
    <Scroll size={24}/>
    </NavLink>
   </nav>
  </HeaderContainer>
 )
}