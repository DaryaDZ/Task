import React from 'react'
import style from './Sidebar.module.css';
import { CiSearch } from 'react-icons/ci';
import { BsJournalText } from 'react-icons/bs';
// import { AiOutlineClose } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
const Sidebar = () => {


  return (
    <>
      
        <div className={style.sidebar}>
          <ul className={style.UL}>
            <li className={style.LI}>
                <CiSearch  style={{marginLeft:"5px"}}/>
                   جستجو</li>
            <li className={style.LI}>
              <BsJournalText style={{ marginLeft: "8px" }} />
            قوانین
            </li>
          </ul>
            </div>
    
     

    
    </>
  )
}

export default Sidebar