import React, { useState } from "react";

import Tree from "./Tree";
import styles from "./Menu.module.css";
import { FcFolder } from "react-icons/fc";
import { Link } from "react-router-dom";

const TreeNode = ({ node }) => {
  const { children, label } = node;
  const [showChildren, setShowChildren] = useState(false);
  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  return (
    <>
      <div
        onClick={handleClick}
        style={{ marginBottom: "10px", cursor: "pointer", marginRight: "50px" }}
      >
        <span className={styles.TreeSpan}>
          <FcFolder />{" "}
          <Link to={`/content/${node.key}`} className={styles.LintTocontent}>
            {label}
          </Link>
        </span>
      </div>
      <ul className={styles.MenuList}>
        {showChildren && <Tree treeData={children} />}
      </ul>
    </>
  );
};

export default TreeNode;
