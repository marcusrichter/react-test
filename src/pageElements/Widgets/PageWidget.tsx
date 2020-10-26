import React from 'react';
import Phone from '@material-ui/icons/Phone';
import Mail from '@material-ui/icons/Mail';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import useScrollPosition from '@react-hook/window-scroll';
import clsx from 'clsx';
import { animateScroll } from 'react-scroll';

const scrollToTop = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
	animateScroll.scrollToTop();
};

export default () => {
	const scrollY = useScrollPosition(60);
	const collapsed = scrollY < 10;	

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
