import { GeistSans } from "geist/font/sans";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
	children,
	params: { locale }
}: {
	children: React.ReactNode;
	params: {locale: string};
}) {
	const messages = await getMessages();

	return (
		<html lang={locale} className={GeistSans.className}>
			<body>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}