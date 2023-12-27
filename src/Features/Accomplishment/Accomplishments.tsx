import React, { FC } from 'react'
import accomplishmentStyle from './Accomplishments.module.css';

const Accomplishments: FC = () => {
  return (
    <>
    <div className={accomplishmentStyle.Container}>
        <button>Awards</button>
        <button>Certificates</button>
        <button>Competitions</button>
    </div>
    </>
  )
}

export default Accomplishments