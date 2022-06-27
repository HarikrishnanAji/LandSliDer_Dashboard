// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import firebase from '../firebase';
// class Chart extends React.Component {
// constructor(props) {
    
//     super(props);
   
//     this.state = {dataset : []}
//     }
    
//   componentDidMount() {
   
   
     
//       firebase.database().ref("dataset").on("value", snapshot => {
//         let dataset = [];
//         snapshot.forEach(snap => {
//             dataset.push(snap.val());
//         });
//         this.setState({ dataset: dataset });
//       });
    
    
//  }
  
//   render(){
//   return (
   
//             <tbody>
//             {this.state.dataset.map(data => {
                
//                 return (
//                     <tr>     
//                     <td>{data.firstName}</td>
//                     <td>{data.lastName}</td>
//                     <td>{data.email}</td>
//                     <td>{data.mobileNumber}</td>
//                     </tr>
                    
//                 );
               
//                 })}
        
               
//             </tbody>
            
         
//   );
// }
// }
// export default Chart;