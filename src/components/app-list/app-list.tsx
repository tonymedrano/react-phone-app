import React from 'react';

export type AppListProps = {
  children?: any,
}

const styles = {
    list: {
        padding: 0
    },
    container: {
        display: 'flex',
        justifyContent:'space-around'
      },
};

function AppList({children}:AppListProps) {
  return (
    <div style={styles.list}>
      <div style={styles.container}>
      {children}
      </div>
    </div>
  );
}

export default AppList;