import React from "react";

const BasePage = ({children, ...props}) => {
      return (
            <div className="basePage">
                  {children}
            </div>
      )
}

export default BasePage