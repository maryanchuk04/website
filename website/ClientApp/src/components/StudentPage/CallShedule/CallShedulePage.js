import React from 'react'
import '../CallShedule/CallShedulePage.css';
function CallShedulePage() {
    return (
        <div className="callshedule">
            <div className="container_all">
                <div className="table_shedule">
                <table class="table_dark">
  <tr>
    <th>Пара</th>
    <th>Початок</th>
    <th>Закінчення</th>
    <th>Перерва</th>
    
    </tr>
  <tr>
    <td>1</td>
    <td>8<sup>30</sup></td>
    <td>9<sup>50</sup></td>
    <td>25 хвилин</td>
    
    </tr>
  <tr>
    <td>2</td>
    <td>10<sup>15</sup></td>
    <td>11<sup>35</sup></td>
    <td>35 хвилин</td>
    
    </tr>
  <tr>
    <td>3</td>
    <td>12<sup>10</sup></td>
    <td>13<sup>30</sup></td>
    <td>15 хвилин</td>
   
    </tr>
  <tr>
    <td>4</td>
    <td>13<sup>45</sup></td>
    <td>15<sup>05</sup></td>
    <td>10 хвилин</td>
    
    </tr>
    <tr>
    <td>5</td>
    <td>15<sup>15</sup></td>
    <td>16<sup>35</sup></td>
    <td></td>
    
    </tr>
  </table>

  
                </div>
            </div>
        </div>
    )
}

export default CallShedulePage;