/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getMainMenu } from '../../actions/menu';
import { IsArray } from '../../helper';
import { Nav, NavItem, NavLink, UncontrolledButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

function NavbarMenu() {
    const { menu, loading } = useSelector(state => ({
        menu: state.menu.data.items,
        loading: state.menu.loading
    }), shallowEqual)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMainMenu())
    }, [])

    return (
        <React.Fragment>
            {!loading ? <Nav>
                {menu.map(item =>
                    !item.child_items ?
                        <NavItem key={item.ID}>
                            <NavLink href="#">{item.title}</NavLink>
                        </NavItem>
                        : <UncontrolledButtonDropdown nav inNavbar>
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
        </React.Fragment >
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