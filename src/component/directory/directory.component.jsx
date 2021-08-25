import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super ();
        
         this.state = {
             section: [ {
                 title: 'hats',
                 imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                 id: 1
             },
             {
                title: 'Jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2

             },
             {
                title: 'Sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3

                 
             },
             {
                title: 'Womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4
             },
             {
                title: 'Mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5

             }]
         };
    }
    render () {
        console.log(this.state.section)
        return (
            <div className= 'directory-menu'>
                 {this.state.section.map(({title, imageUrl, id , size }) => (
                         <MenuItem key={id} title= {title} imageUrl={imageUrl} size={size} />
                     ))}
            
            </div>
        );
    }
}

export default Directory;