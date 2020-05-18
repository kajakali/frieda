import React, { Component } from 'react';
import Box from '@material-ui/core/Box';



 class DoneThings extends Component {
   state = {
     showThingsIveDone: true,
   };

   login = (event) => {
     event.preventDefault();

     if (this.state.username && this.state.password) {
       this.props.dispatch({
         type: 'LOGIN',
         payload: {
           username: this.state.username,
           password: this.state.password,
         },
       });
     } else {
       this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
     }
   } // end login

   handleInputChangeFor = propertyName => (event) => {
     this.setState({
       [propertyName]: event.target.value,
     });
   }

   render() {
    const boxstyle = {
        color: "white",
        backgroundColor: "#a478fc",
        width: '400px',
        height: '400px',
        display: 'inline-block',
        padding: "10px",
        margin: "5px",
        overflow: "none",
      };
     return (
       <div>
           <h1>Frieda Jacobson</h1>
           {this.state.showThingsIveDone
           ?         
           <Box>
                <h2>Things I've Done</h2>
           <Box style={{textAlign: 'center'}}>
           <Box style={boxstyle}>
                <h3>AmeriCorps*NCCC</h3>
               <img style={{width: 380}} src='https://cdn.freebiesupply.com/logos/thumbs/2x/americorps-nccc-logo.png' alt='AmeriCorps NCCC' />
           </Box>
           <Box style={boxstyle}>
                <h3>CVN 72 USS Abraham Lincoln</h3>
               <img style={{width: 380}} src='https://www.navy.mil/management/photodb/webphoto/web_170511-N-SA173-199.jpg' alt='CVN 72 does high speed turns' />
           </Box>
           <Box style={boxstyle}>
                <h3>Metropolitan State University Chemistry Degree</h3>
               <img src='https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=380
               &q=80' alt='major league baseballs' />
           </Box>
           </Box>
          
           <button onClick={() => this.setState({showThingsIveDone: false})}>Things I Like</button>
         </Box>
            
           :
           <Box>
            <h2>Things I Like</h2>
            <Box style={{textAlign: 'center'}}>
            <Box style={boxstyle}>
                Space
                <img style={{width: 380}}src='https://images-assets.nasa.gov/image/PIA04921/PIA04921~medium.jpg' alt='Andromeda galaxy' />
            </Box>
            <Box style={boxstyle}>
                Rain
                <img src='https://images.unsplash.com/photo-1572883781464-e76e5597e432?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80' alt='walking in the rain in the city' />
            </Box>
            <Box style={boxstyle}>
                Baseball
                <img src='https://images.unsplash.com/photo-1516731415730-0c607149933a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80' alt='major league baseballs' />
            </Box>
            </Box>
           
            <button onClick={() => this.setState({showThingsIveDone: true})}>Things I've Done</button>
           </Box>
           }
        </div>
     );
   }
 }



 export default DoneThings;