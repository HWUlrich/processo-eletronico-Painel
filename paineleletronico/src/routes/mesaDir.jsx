import './mesaDir.css';
import Parlament from '../component/Parlament';
import Disp4 from './disp4';


const MesaDir = () => {
  
  // altera a tabela de estilos
  const dispStyleMesa = () => {
    document.body.classList.toggle('mesa-dir');
  }  
  
  return (    
    <div className='mesa-diretora'>
      <div className='mesa-1'>
        <div className='parlament'>
        <Parlament />
        </div>        
        <div className='som'> 
        <h1>Controle de Som</h1>
        </div>        
      </div>     
      <Disp4 />          
    </div>
  );
}

export default MesaDir;