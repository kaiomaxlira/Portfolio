

interface InfoProps {
    title: string;
    description: string;
}

export const Info = ({ title, description }: InfoProps) => {
    return (
        <div className="ml-[2rem] mt-[-8rem] font-libre text-base">
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    )
}