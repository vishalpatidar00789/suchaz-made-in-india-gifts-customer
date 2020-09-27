import React, { useEffect } from 'react';
import HeaderDefaultWrapper, {
    HeaderDefaultCenter,
    HeaderDefaultContainer,
    HeaderDefaultLeft,
    HeaderDefaultRight,
    HeaderDefaultTop,
} from './header.style';
import { stickyHeader } from '../../utilities/common-helpers';
import { useDispatch } from 'react-redux';
import { getMenus } from '../../store/collection/action';
import MenuDefault from './menu';
import NavigationHeader from './navigation';

type HeaderProps = {
    className?: string;
};

const HeaderDefault: React.FC<HeaderProps> = ({ className }) => {
    const showSearch = true;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMenus());
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <HeaderDefaultWrapper className={className} id="headerSticky">
            <HeaderDefaultTop>
                <HeaderDefaultContainer>
                    <HeaderDefaultLeft>
                        <MenuDefault></MenuDefault>
                    </HeaderDefaultLeft>
                    <HeaderDefaultCenter></HeaderDefaultCenter>
                    <HeaderDefaultRight></HeaderDefaultRight>
                </HeaderDefaultContainer>
            </HeaderDefaultTop>
            <NavigationHeader />
        </HeaderDefaultWrapper>
    );
};

export default HeaderDefault;
