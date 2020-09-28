import React, { useEffect, FC } from 'react';
import HeaderWrapper, { HeaderCenter, HeaderContainer, HeaderLeft, HeaderRight, HeaderTop } from './header.style';
import { stickyHeader } from '../../utilities/common-helpers';
import { useDispatch } from 'react-redux';
import { getMenus } from '../../store/collection/action';
import MenuDefault from './menu';
import NavigationHeader from './navigation';
import HeaderActions from './actions';

const Header: FC = () => {
    const showSearch = true;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMenus());
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <HeaderWrapper id="headerSticky">
            <HeaderTop>
                <HeaderContainer>
                    <HeaderLeft>
                        <MenuDefault />
                    </HeaderLeft>
                    <HeaderCenter></HeaderCenter>
                    <HeaderRight>
                        <HeaderActions />
                    </HeaderRight>
                </HeaderContainer>
            </HeaderTop>
            <NavigationHeader />
        </HeaderWrapper>
    );
};

export default Header;
