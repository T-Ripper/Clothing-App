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
                 id: 1,
                 linkUrl: 'hats'
             },
             {
                title: 'Jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: ''

             },
             {
                title: 'Sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl:''
                 
             },
             {
                title: 'Womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: ''
             },
             {
                title: 'Mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: ''

             }]
         };
    }
    render () {
        console.log(this.state.section)
        return (
            <div className= 'directory-menu'>
                 {this.state.section.map(({ id, ...otherSectionProps }) => (
                         <MenuItem key={id} {...otherSectionProps} />
                     ))}
            
            </div>
        );
    }
}

export default Directory;