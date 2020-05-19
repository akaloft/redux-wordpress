/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getMainMenu } from '../../actions/menu';
import { Nav, NavItem, NavLink, UncontrolledButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Navbar, Collapse, NavbarToggler } from 'reactstrap';

function NavbarMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const { menu, loading } = useSelector(state => ({
        menu: state.menu.data.items,
        loading: state.menu.loading
    }), shallowEqual)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMainMenu())
    }, [])

    const toggle = () => setIsOpen(!isOpen);


    return (
        <Navbar light expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                {!loading ? <Nav>
                    {menu.map(item =>
                        !item.child_items ?
                            <NavItem key={item.ID}>
                                <NavLink href="#">{item.title}</NavLink>
                            </NavItem>
                            : <UncontrolledButtonDropdown nav inNavbar key={item.ID}>
                                <DropdownToggle caret>{item.title}</DropdownToggle>
                                <DropdownMenu right>
                                    {item.child_items.map(sub =>
                                        <DropdownItem key={sub.ID}>{sub.title}</DropdownItem>
                                    )}
                                </DropdownMenu>
                            </UncontrolledButtonDropdown>
                    )}
                </Nav> : 'yükleniyor'
                }
            </Collapse>
        </Navbar>
    )
}

export default NavbarMenu


{/* <NavLink href="#">
{item.child_items ? <UncontrolledButtonDropdown nav inNavbar>
    <DropdownToggle caret>{item.title}</DropdownToggle>
    <DropdownMenu right>
        {item.child_items.map(sub =>
            <DropdownItem key={sub.ID}>{sub.title}</DropdownItem>
        )}
    </DropdownMenu>
</UncontrolledButtonDropdown> : item.title}
</NavLink> */}