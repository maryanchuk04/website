import React from 'react'
import '../AdminPage/AdminPage.css'
function AdminPage() {
    



    return (
        <div>
            <div className="all_admin">
                <div className="menu_admin">
                    <div className="main_menu">
                      <ul>
                          <li>Головна</li>
                          <li>Досягнення</li>
                          <li>Студенту</li>
                          <li>Абітурієнту</li>
                          <li>Спеціальності</li>
                          <li>Адміністація</li>
                          <li>Новини</li>
                      </ul>
                    </div>
                    <div className="sub_menu">
                    <ul>

                          <li>Лорем іпсум</li>
                          <li>Лорем іпсум</li>
                          <li>Лорем іпсум</li>
                      </ul>
                    </div>
                  
                </div>
                <div className="other_admin">

                </div>
                <div className="button_admin">
                      <div className="loc_btn">
                          <div className="select_img">
                             <button>1</button>
                             <button>2</button>
                             <button>3</button>
                          </div>
                          <button className="butn">Додати</button>
                          <button className="butn">Видалити</button>
                          <button className="butn">Редагувати</button>
                      </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage
