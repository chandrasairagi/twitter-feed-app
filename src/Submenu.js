import React from 'react';
import './Submenu.css';
import db from './firebase';


function Submenu({date}) {
    const removefromdb =  () =>
    {
        db.collection('posts').get().then((snapshot)=>{
           snapshot.forEach((doc)=>{
                if(doc.data().createdAt===date)
                {
                  db.collection('posts').doc(`${doc.id}`).delete();
                }
                

           })
       });

    
      
    }
    return (
        <div className="submenu  submenu-center">
            <h4 onClick={removefromdb}>REMOVE</h4>
                
        </div>
    )
}

export default Submenu
