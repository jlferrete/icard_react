import React from "react";
import "./AdminLayout.scss";

export default function AdminLayout(props) {
    const { children } = props;
    
    return (
    <div>
        <p>AdminLayout</p>
        
        { children }    
    </div>
  )
}
