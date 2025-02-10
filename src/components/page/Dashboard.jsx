import React from "react";
import cls from '../../css/modules/Dashboard.module.css'

const Dashboard = () => {
      const classEnd = [cls.dashboardAnalytic, cls.end]
      return (
            <div className="dashboard">
                  <div className={classEnd.join(' ')}>Dashboard</div>
                  <div className={classEnd.join(' ')}>Dashboard</div>
                  <div className={classEnd.join(' ')}>Dashboard</div>
                  <div className={cls.dashboardAnalytic}>Dashboard</div>
                  <div className={cls.dashboardAnalytic}>Dashboard</div>
                  <div className={cls.dashboardAnalytic}>Dashboard</div>
            </div>
      )
}

export default Dashboard