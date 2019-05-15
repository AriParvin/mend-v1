import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class NavDrop extends React.Component {
     constructor(props) {
          super(props);

          this.toggle = this.toggle.bind(this);
          this.state = {
               dropdownOpen: false
          };
     }

     toggle() {
          this.setState(prevState => ({
               dropdownOpen: !prevState.dropdownOpen
          }));
     }

     render() {
          return (
               <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle>

                         <span className="line1"></span>
                         <span className="line2"></span>
                         <span className="line3"></span>

                    </DropdownToggle>
                    <DropdownMenu>
                         <img src='https://i.postimg.cc/gJpPWC14/LOGO.png' />

                         <DropdownItem><Link to='/'>Home</Link></DropdownItem>

                         <DropdownItem header>What do we offer?</DropdownItem>
                         <DropdownItem><Link to='diy'>DIY Videos and Guides</Link></DropdownItem>
                         <DropdownItem><Link to='/workshops'>Workshops</Link></DropdownItem>
                         <DropdownItem divider />
                         <DropdownItem><Link to='/store'>Recommended Stores</Link></DropdownItem>
                         <DropdownItem>About Us</DropdownItem>
                         <DropdownItem>Team</DropdownItem>
                         <DropdownItem>Contact Us</DropdownItem>
                         <DropdownItem>Follow</DropdownItem>


                    </DropdownMenu>
               </Dropdown>
          );
     }
}