import React from 'react';

export type AppListItemProps = {
  id: string,
  name: string,
  description: string,
  image: string,
  color: string
}

const styles = {
  card: {
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
      width: '40%',
    },
    container: {
      padding: '2px 16px'
    },
    image: {
      width:'100%'
    }
};

function AppListItem({name, description, image, color}: AppListItemProps) {
  return (
    <div style={styles.card}>
        <img data-testid="image" src={image} alt={name} style={styles.image} />
        <div style={styles.container}>
            <h4><strong data-testid="name">{name}</strong></h4> 
            <p><strong data-testid="description">Description:</strong> {description}</p> 
            <p><strong data-testid="color">Color:</strong> {color}</p> 
        </div>
    </div>
  );
}

export default AppListItem;
