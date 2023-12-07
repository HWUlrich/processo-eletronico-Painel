import { useContext } from 'react';
import './Disp.css';
import Context from '../context/MyContext';


const Disp4 = () => {

  const { sessions, expmat, parlament, ordemDia } = useContext(Context);

  const dayToday = new Date();
  const day = dayToday.getDay();
  const month = dayToday.getMonth();
  const year = dayToday.getFullYear();
  const hours = dayToday.getHours();
  const minutes = dayToday.getMinutes();
  const timer = (hours < 10 ? "0" + hours : hours) + " : " + (minutes < 10 ? "0" + minutes : minutes) + " h";

  setInterval(() => {
    this.timer;
  }, 1000);
      
  return (    
    <div className='painel'>
      <div className='headline'>
        <h1>{sessions.reduce((o, p) => {return p.txtTituloReuniao}, "")}</h1>             
      </div>
      <div className='data-hora'>
          <h2>{day + "/" + month + "/" + year}</h2>       
          <h2>{timer}</h2>
        </div>       
      <div className="materias-exp">                    
        {expmat.map((sessao) => (                                                                            
            <div className='exped-result'  key={sessao.id}>                         
              <div className='exped-result-mat'>
                <h1>{sessao.__str__.slice(24, -67)}</h1>                            
              </div>            
              <div className='exped-result-res'>
                <h2>{sessao.resultado}</h2>                
              </div>                                         
            </div>                
        ))}
      </div>               
      <div className="painel-mat-result">
        {sessions.map((sessao) => (                    
          <div className='materia-vot' key={sessao}>
            <h1>{sessao.__str__.slice(24, -67)}</h1>
            <h2>{sessao.id}</h2>                      
          </div>
        ))} 
          <div className='resultado-vot'>
            <h2>Sim: {parlament.reduce((o,p) => {p.voto === "Sim" && o++; return o}, 0)}</h2>
            <h2>Não: {parlament.reduce((o,p) => {p.voto === "Não" && o++; return o}, 0)}</h2>
            <h2>Abstenções: {parlament.reduce((o,p) => {p.voto === "Abstenções" && o++; return o}, 0)}</h2>
            <h2>Não Votaram: {parlament.reduce((o,p) => {p.voto === "Não Votou" && o++; return o}, 0)}</h2>                
          </div>          
      </div>
    </div>
  );
};

export default Disp4;