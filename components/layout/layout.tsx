import React from 'react';
import clsx from 'clsx';
import Header_Navbar from 'components/header/header';
import Footer from 'components/footer/footer';

export interface Layout_Props {
	with_header?: boolean;

	with_footer?: boolean;

	children?: any;
	className_Children?: string;
	className_Layout?: string;
}

export const Layout: React.FC<Layout_Props> = ({
	with_header,

	with_footer,

	children,
	className_Children,
	className_Layout,
}) => {
	return (
		<main className={clsx('w-full', className_Layout)}>
			{/* Header */}
			{with_header && (
				<Header_Navbar
					logoUrl={
						'https://cdn.pixabay.com/photo/2016/12/07/15/15/lotus-with-hands-1889661_1280.png'
					}
				/>
			)}

			{/* Content of the layout */}
			{children && <div className={className_Children}>{children}</div>}

			{/* Footer */}
			{with_footer && <Footer companyName="Shokworks" rightsYear="2023" />}
		</main>
	);
};
