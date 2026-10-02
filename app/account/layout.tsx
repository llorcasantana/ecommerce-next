export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <div className="min-h-full flex flex-col">{children}</div>
    );
}