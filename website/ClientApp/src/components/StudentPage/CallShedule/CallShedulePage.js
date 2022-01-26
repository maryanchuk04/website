import React from 'react'
import '../CallShedule/CallShedulePage.css';
function CallShedulePage() {
    return (
        <div>
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
    <td>20.3</td>
    <td>30.5</td>
    <td>23.5</td>
    
    </tr>
  <tr>
    <td>Google</td>
    <td>50.2</td>
    <td>40.63</td>
    <td>45.23</td>
    
    </tr>
  <tr>
    <td>Apple</td>
    <td>25.4</td>
    <td>30.2</td>
    <td>33.3</td>
   
    </tr>
  <tr>
    <td>IBM</td>
    <td>20.4</td>
    <td>15.6</td>
    <td>22.3</td>
    
    </tr>
  </table>

  
                </div>
            </div>
        </div>
    )
}

export default CallShedulePage;