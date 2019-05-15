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

                         <span class="line1"></span>
                         <span class="line2"></span>
                         <span class="line3"></span>

                    </DropdownToggle>
                    <DropdownMenu>
                         <DropdownItem header>What do we offer?</DropdownItem>
                         <DropdownItem>DIY Videos and Guides</DropdownItem>
                         <DropdownItem>Workshops</DropdownItem>
                         <DropdownItem divider />
                         <DropdownItem>Recommended Stores</DropdownItem>
                         <DropdownItem>About Us</DropdownItem>
                         <DropdownItem>Team</DropdownItem>
                         <DropdownItem>Contact Us</DropdownItem>
                         <DropdownItem>Follow</DropdownItem>


                    </DropdownMenu>
               </Dropdown>
          );
     }
}