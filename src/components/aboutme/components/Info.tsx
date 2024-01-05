

interface InfoProps {
    title: string;
    description: string;
}

export const Info = ({ title, description }: InfoProps) => {
    return (
        <div className="flex items-center gap-2 font-libre text-base">
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    )
}