import React from 'react'
import styles from './Menu.module.css'
import Tree from './Tree';
import treeData from '../../TreeData.json'
const Menu = () => {
 

  return (
    
    <>
    <div className={styles.Menu}>
      <header>فهرست</header>
      <ul>
        <Tree treeData={treeData} />
      </ul>    
      </div>
    
    
    </>
    
  )
}

export default Menu