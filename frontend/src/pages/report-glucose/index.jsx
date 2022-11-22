import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import RadialChartGlucoses from "../../shared/components/radial-chart-glucoses";
import TurnedAxisGlucoses from "../../shared/components/turned-axis-glucoses";
import './styles.scss';


const ReportGlucose = () => {
    const [glucose, setGlucose] = useState([])

    useEffect(() => {
        api.get(`/glucoses-count`).then((response) => {
            const { glucose_LT75, glucose_LT99, glucose_GT99_LT125, glucose_GT126, glucose_TOT } = response.data.glucoses;
            setGlucose({ nivel1: glucose_LT99, nivel2: glucose_GT99_LT125, nivel3: glucose_GT126, nivel4: glucose_LT75, total: glucose_TOT })
            console.log(glucose)
          })
    }, [])

    return(
        <div className="container">
            <h1>Relatório de Glicose</h1>
                <div className="d-flex">
                    <div>
                        <p><strong>Nível 1: </strong>Glicemia de jejum normal: inferior a 99 mg/dL;</p>
                        <p><strong>Nível 2: </strong>Glicemia de jejum alterada: entre 100 mg/dL e 125 mg/dL;</p>
                        <p><strong>Nível 3: </strong>Diabetes: igual ou superior a 126 mg/dL;</p>
                        <p><strong>Nível 4: </strong>Glicemia de jejum baixa ou hipoglicemia: igual ou inferior a 70 mg/dL.</p>
                    </div>
                    <div>
                        <p><strong>Nível 1: </strong>{glucose.nivel1}</p>
                        <p><strong>Nível 2: </strong>{glucose.nivel2}</p>
                        <p><strong>Nível 3: </strong>{glucose.nivel3}</p>
                        <p><strong>Nível 4: </strong>{glucose.nivel4}</p>
              
                    </div>
                    <p><strong>Total: </strong>{glucose.total}</p>
                </div>

                <div className="chart-container">
                    <RadialChartGlucoses glucose={glucose}/>
                    {/* <TurnedAxisGlucoses glucose={glucose}/> */}
                </div>
  
                <Link className="btn btn-danger" to="/">Voltar</Link>
        
        </div>
    )
}

export default ReportGlucose; 