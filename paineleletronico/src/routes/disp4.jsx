import { useContext } from 'react';
import { useTime } from 'react-timer-hook';
import Context from '../context/MyContext';
import './Disp.css';


const Disp4 = () => {  

  const { sessions, parlament, matExp, matOrd, date } = useContext(Context);
  const { hours, minutes, seconds, ampm } = useTime({ format: '12-hour'});
  
  const dayToday = new Date();
  const day = dayToday.getDate();
  const month = dayToday.getMonth() + 1;
  const year = dayToday.getFullYear();
  const timer = (hours < 10 ? "0" + hours : hours) + " : " + (minutes < 10 ? "0" + minutes : minutes) + " " + ampm;   


  return (    
    <div className='painel'>
      <div className='headline'>
        <h1>{sessions.reduce((o, p) => {return p.txtTituloReuniao}, "")}</h1>             
      </div>
      <div className='data-hora'>
          <h2>{day + " / " + month + " / " + year}</h2>       
          <h2>{timer}</h2>
      </div>       
      <div className="materias-exp">                    
        {matExp.map((sessao) => (                                                                          
            <div className='exped-result'  key={sessao.id}>                         
              <div className='exped-result-mat'>
                <h1>Expediente: {sessao.__str__.slice(24, -67)}</h1>                                            
              </div>            
              <div className='exped-result-res'>
                <h2>{sessao.resultado ? sessao.resultado : "Em Pauta para Leitura"}</h2>                
              </div>                                         
            </div>                
        ))}
      </div>               
      <div className="painel-mat-result">
        {matOrd.map((sessao) => (                    
          <div className='materia-vot' key={sessao.id}>
            <h1>Votação: {sessao.__str__.slice(24, -67)}</h1>
            <div className='materia-vot-res'>
              <h2>{sessao.resultado ? sessao.resultado : "Aguardando Votação"}</h2>                
            </div>                                  
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