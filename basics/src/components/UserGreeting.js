import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn ? <div>Gauarav</div> : <div>Guest</div>;
    //   if(this.state.isLoggedIn){
    //       return <div>Gaurav</div>
    //   }else{
    //       return <div>Guest</div>
    //   }

    //   return this.state.isLoggedIn && <div>Hello Gaurav </div>  // Short circuit method

    // return (
    //   <div>
    //     <div>Welcome Gaurav Rajput</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
