import { browser } from '$app/environment';

// utils.js

function getWindowWidths(cb) {
	const windowWidth = window.innerWidth;
	const isMobile = windowWidth < 768;
	const isTablet = windowWidth >= 768 && windowWidth < 1024;
	const isDesktop = windowWidth >= 1024;
	cb({ windowWidth, isMobile, isTablet, isDesktop });
}

export function watchWindowWidth(cb) {
	browser && window.addEventListener('resize', () => getWindowWidths(cb));
}

export function unwatchWindowWidth(cb) {
	browser && window.removeEventListener('resize', () => getWindowWidths(cb));
}

export default {
	watchWindowWidth,
	unwatchWindowWidth
};
