import React from 'react';
import moment from 'moment';
import styles from '../styles/DeploymentSchedule.module.css';

const DeploymentSchedule = ( props ) => {
  const { offices, timeRemaining, timerLength } = props;

  const schedule = offices.map((item, index) => {
    return (
      <div className={styles.officeItem} key={index}>
        <span className={styles.city}>{item.city}</span>
        <span className={styles.deploymentTime}>
          {timerLength ? moment().add(timeRemaining, 's').utcOffset(item.timezoneOffset).format("dddd, MMMM Do [ at ] h:mm A") : `–`}
        </span>
      </div>
    );
  });

  return (
    <div className={styles.deploymentSchedule}>
      <span className={styles.scheduleHeader}>Deployment Schedule</span>
      <div className={styles.scheduleBody}>
        {schedule}
      </div>
    </div>
  );
};

export default DeploymentSchedule;