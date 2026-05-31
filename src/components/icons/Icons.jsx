import React from "react";

function SvgIcon({ size = 18, color = "currentColor", children, viewBox = "0 0 24 24", ...props }) {
	return (
		<svg
			width={size}
			height={size}
			viewBox={viewBox}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
			style={{ display: "block" }}
			{...props}
		>
			<g stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
				{children}
			</g>
		</svg>
	);
}

export function IconShield(props) {
	return (
		<SvgIcon {...props}>
			<path d="M12 3l7 3v5c0 4.6-2.8 8.7-7 10-4.2-1.3-7-5.4-7-10V6l7-3z" />
			<path d="M9.5 12l1.8 1.8L14.9 10" />
		</SvgIcon>
	);
}

export function IconPhone(props) {
	return (
		<SvgIcon {...props}>
			<path d="M7.5 4.8l2.2 4.4-1.8 1.8c1 1.9 2.5 3.4 4.4 4.4l1.8-1.8 4.4 2.2c.5.2.8.7.7 1.2-.2 1.1-1.1 2-2.2 2.2-5.8 1.2-11.3-4.3-10.1-10.1.2-1.1 1.1-2 2.2-2.2.5-.1 1 .2 1.2.7z" />
		</SvgIcon>
	);
}

export function IconWA(props) {
	return (
		<SvgIcon {...props}>
			<path d="M20 11.7a7.8 7.8 0 0 1-11.5 6.8L4 19l1.5-4.3A7.8 7.8 0 1 1 20 11.7z" />
			<path d="M9.2 9.3c.2-.4.4-.4.7-.4h.6c.2 0 .5-.1.7.4l.6 1.4c.1.3.1.5 0 .7l-.5.7c-.1.2-.1.4 0 .6.4.8 1.3 1.7 2.1 2.1.2.1.4.1.6 0l.7-.5c.2-.1.4-.1.7 0l1.4.6c.5.2.4.5.4.7v.6c0 .3 0 .5-.4.7-.5.3-1.3.5-2.3.3-2.4-.4-5.1-3.1-5.5-5.5-.2-1 .1-1.8.4-2.3z" />
		</SvgIcon>
	);
}

export function IconFacebook(props) {
	return (
		<SvgIcon {...props} viewBox="0 0 24 24">
			<path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.1 1.2-3.3 3-3.3.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12z" />
		</SvgIcon>
	);
}

export function IconInstagram(props) {
	// Icono de Instagram con tamaño por defecto aumentado
	return (
		<SvgIcon size={22} {...props} viewBox="0 0 24 24">
			<path d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4z" />
			<path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
			<path d="M17.5 6.2h.01" />
		</SvgIcon>
	);
}

export function IconTikTok(props) {
	// Icono estilizado de TikTok con tamaño por defecto aumentado
	return (
		<SvgIcon size={22} {...props} viewBox="0 0 24 24">
			<path d="M16 4.5v7.2a3.8 3.8 0 1 1-3.8-3.8" />
			<path d="M9.5 14.5a3.5 3.5 0 1 0 3.5 3.5v-8" />
		</SvgIcon>
	);
}

export function IconMenu(props) {
	return (
		<SvgIcon {...props}>
			<path d="M4 7h16" />
			<path d="M4 12h16" />
			<path d="M4 17h16" />
		</SvgIcon>
	);
}

export function IconClose(props) {
	return (
		<SvgIcon {...props}>
			<path d="M5 5l14 14" />
			<path d="M19 5L5 19" />
		</SvgIcon>
	);
}

export function IconStar(props) {
	return (
		<SvgIcon {...props}>
			<path d="M12 3.8l2.5 5.1 5.6.8-4.1 4 1 5.6-5-2.7-5 2.7 1-5.6-4.1-4 5.6-.8L12 3.8z" />
		</SvgIcon>
	);
}

export function IconCheck(props) {
	return (
		<SvgIcon {...props}>
			<path d="M20 6.5l-9.2 11L4 12" />
		</SvgIcon>
	);
}

export function IconBarbell(props) {
	return (
		<SvgIcon {...props}>
			<path d="M6 8v8" />
			<path d="M18 8v8" />
			<path d="M4 10v4" />
			<path d="M20 10v4" />
			<path d="M8 12h8" />
		</SvgIcon>
	);
}

export function IconGraduate(props) {
	return (
		<SvgIcon {...props}>
			<path d="M4 9l8-4 8 4-8 4-8-4z" />
			<path d="M7 10.5V14c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-3.5" />
			<path d="M20 10v4" />
		</SvgIcon>
	);
}

export function IconShieldCheck(props) {
	return (
		<SvgIcon {...props}>
			<path d="M12 3l7 3v5c0 4.6-2.8 8.7-7 10-4.2-1.3-7-5.4-7-10V6l7-3z" />
			<path d="M9.3 12.2l1.8 1.8 3.8-4" />
		</SvgIcon>
	);
}

export function IconClock(props) {
	return (
		<SvgIcon {...props}>
			<path d="M12 6.5v6l4 2" />
			<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
		</SvgIcon>
	);
}

export function IconClipboard(props) {
	return (
		<SvgIcon {...props}>
			<path d="M9 4.5h6" />
			<path d="M9.5 3.5h5a1 1 0 0 1 1 1v1h-7v-1a1 1 0 0 1 1-1z" />
			<path d="M8 6.5h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1z" />
			<path d="M9.5 11h5" />
			<path d="M9.5 14h4" />
		</SvgIcon>
	);
}

export function IconFamily(props) {
	return (
		<SvgIcon {...props}>
			<path d="M8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
			<path d="M16 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
			<path d="M6.5 19v-2.3c0-1.9 1.4-3.5 3.2-3.5h.6c1.8 0 3.2 1.6 3.2 3.5V19" />
			<path d="M13 19v-2c0-1.4 1-2.5 2.3-2.5h.4c1.3 0 2.3 1.1 2.3 2.5v2" />
		</SvgIcon>
	);
}

export function IconChevron({ down = false, ...props }) {
	return (
		<SvgIcon {...props} viewBox="0 0 24 24">
			<path d={down ? "M6.5 10l5.5 5.5 5.5-5.5" : "M6.5 14l5.5-5.5 5.5 5.5"} />
		</SvgIcon>
	);
}
