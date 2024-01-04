interface TitleProps {
    title: string;

}

export const Title = (props: TitleProps) => {
    return (
        <div className="font-libre text-3xl mt-[2rem] ml-[2rem]">
            <h1>{props.title}</h1>
        </div>
    )
}