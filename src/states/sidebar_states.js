import React from "react";

export const SidebarContext = React.createContext();

export const SidebarStates = ({ children }) => {
  const [dashboardNavOpen, setDashboardNavOpen] = React.useState(false);
  const [addTable, setAddTable] = React.useState(false);
  const [addRow, setAddRow] = React.useState(false);
  return (
    <SidebarContext.Provider
      value={{
        dashboardNavOpen,
        setDashboardNavOpen,
        addTable,
        setAddTable,
        addRow,
        setAddRow,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
