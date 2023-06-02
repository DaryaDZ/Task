import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import TreeData from '../../TreeData.json';
import styles from './Content.module.css';



const Content = () => {
  let { id } = useParams();
  const allBook = TreeData.find(item => item.key == id);
const subBook = TreeData.map(item=>item.children.find(child =>child.key == id))
const booksForOneBook=subBook.map((item={}) => {return item.children })
const BookDetail = TreeData.map((item=[]) => {
    return item.children.map((item={}) => item.children.find(child => child.key == id) )
  }  
    )



  return (
    <div className={styles.content}>
      <header>متن</header>
      <ul>

      {
        allBook ?
        allBook.children.map(child => {
          return <Link to={`/content/${child.key}`} className={styles.LintTocontent}> 
          
          
          
          <li key={child.key} className={styles.Books}>
            {child.label}
            </li>
            </Link>
        })
        :""
      }
      </ul>
       
      {subBook ?
       
        
        
          booksForOneBook.map((books = []) => {
            return books.map(book => {
              return <>
                <Link to={`/content/${book.key}`} className={styles.LintTocontent}> 
                
                <div className={styles.Books}>
                  {book.label}
                  </div>
                
                </Link>
                </>
            })
          }) 
        
        
        
        :""
        
        
        
        }
      {
        
        BookDetail?
        
        BookDetail.map(item => {
           return item.map((child = {}) => {
             return <>
               <div className={styles.ContentTitle} key={child.key}>
                 {child.label}
         
               </div>
               <div className={styles.contentText}>{child.text}</div>
           
           
             </>
           })
         }):""
}
        
        
        
        
        
        
      
            
    </div>
  )
}

export default Content