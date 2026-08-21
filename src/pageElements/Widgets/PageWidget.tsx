import React from 'react';
import Phone from '@mui/icons-material/Phone';
import Mail from '@mui/icons-material/Mail';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import useScrollPosition from '@react-hook/window-scroll';
import clsx from 'clsx';
import { animateScroll } from 'react-scroll';
import PageContext from "./../../contexts/PageContext";

const scrollToTop = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
	animateScroll.scrollToTop();
};

export default () => {	
	const scrollY = useScrollPosition(60);
	const {sideMenuActivated} = React.useContext(PageContext);
	const collapsed = scrollY < 10 || sideMenuActivated;	
	
	return <div className={clsx('d-flex',  'page-widget', collapsed && 'page-widget-collapsed')}>
		<div>
			<div>
				<Phone></Phone>
			</div>
		</div>
		<div>
			<div>
				<Mail></Mail>
			</div>
		</div>
		<div>
			<div onClick={scrollToTop}>
				<KeyboardArrowUp></KeyboardArrowUp>
			</div>
		</div>
	</div>
};
