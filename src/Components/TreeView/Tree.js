import React from 'react'
import TreeNode from './TreeNode';
// import Content from '../Content/Content';

const Tree = ({ treeData =[] }) => {
  // console.log(treeData)
  return (
    <div >
<ul>
        {treeData.map((node) => {
          return <>
          <div key={node.key}>
              <TreeNode node={node} key={node.key} />
            
          </div>
        
          </>
        
        
        })}
    </ul>



    </div>
  )
}

export default Tree