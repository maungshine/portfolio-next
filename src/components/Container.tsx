import clsx from 'clsx';

const Container = ({ children, classnames }: { children: React.ReactNode, classnames?: string }) => {
    return (
        <div className={clsx(
            "max-w-[1024px] flex flex-col gap-8 mt-8 px-2",
            classnames
        )}>
            {children}
        </div>
    )
}

export default Container