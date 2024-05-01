import React from 'react';

export default function LoginPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main className={'flex justify-center h-[672px]'}>{children}</main>;
}
