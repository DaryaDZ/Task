import React, { useState} from "react";
import styles from "./Navbar.module.css";
import style from '../SideBar/Sidebar.module.css'
import user from "../../Images/User2.jpg";
import { BsBell } from "react-icons/bs";
import { FiSettings, FiMessageSquare } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { BsJournalText } from 'react-icons/bs';
const Navbar = () => {
  const [open, setOpen] = useState(false);


  return (
    <>
      
      <div className={styles.navbar}>
        <div>
          <img src={user} alt="" className={styles.IMG} />
          <BsBell
           className={styles.NAvbarIcons}
          />
          <FiMessageSquare
            className={styles.NAvbarIcons}
          />
          <FiSettings
            className={styles.NAvbarIcons}
          />
        </div>
        
          <div onClick={() => setOpen(true)}>
            <AiOutlineMenu className={styles.sidebarIcon} />
          </div>
        
        {open &&
       <div className={style.sidebarInMobileScreen}>
        <div className={style.closeIconDiv} onClick={()=>setOpen(false)}>
        <AiOutlineClose className={style.closeIcon}  />
        </div>
      <ul className={style.UL}>
            <li className={style.LI}>
                <a href="/#">
                  <CiSearch style={{ marginLeft: "5px" }} />
              جستجو</a>
            </li>
        <li className={style.LI}>
          <BsJournalText style={{ marginLeft: "8px" }} />
        قوانین
        </li>
      </ul>
          </div>
   }
        
      </div>
    </>
  );
};

export default Navbar;
