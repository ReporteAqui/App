import "@/styles.css"

interface NoticesProps {
    title: string,
    body: string
}

type NoticesComponentProps = React.PropsWithChildren<NoticesProps>

export default function Notices({ title, body, children }: NoticesComponentProps) {
    return (
        <>
            <div className="w-full card-aspect-ratio grid grid-rows-3 items-center justify-center p-2 gap-2 border-2 rounded-xl shadow-lg bg-neutral-100 dark:bg-neutral-950 border-black/10 shadow-black/10 dark:border-white/10 dark:shadow-white/10">
                <div className="w-full h-full flex items-center justify-center">
                    {children}
                </div>

                <div className="w-full h-full flex items-center justify-center">
                    <h1 className="font-bold text-center">{title}</h1>
                </div>

                <div className="w-full h-full flex items-start justify-center">
                    <h4 className="text-center">{body}</h4>
                </div>
            </div>
        </>
    )
}