'use client';

const Timeline = ({ timelineElements }: {
    timelineElements: {
        id: string,
        title: string,
        year: string,
    }[]
}) => {
    return (
        <div className='flex flex-col w-full p-8'>
            {timelineElements.map((element) => (
                <div className="grid grid-cols-2 relative" key={element.id}>
                    <div className="px-2 py-8 md:p-8 flex border-r dark:border-slate-600 items-center justify-end">
                        <p className="text-sm">
                            {element.year}
                        </p>
                    </div>
                    <div className="absolute w-[16px] h-[16px] rounded-full bg-cyan-400 top-[50%] bottom-[50%] left-[50%] right-[50%] -translate-x-[50%] -translate-y-[50%]"></div>
                    <div className="p-8 flex items-center border-l dark:slate-neutral-600">
                        <p className="text-sm border dark:border-default-200 p-4 rounded-md dark:bg-black/30 backdrop-blur-sm">
                            {element.title}
                        </p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Timeline