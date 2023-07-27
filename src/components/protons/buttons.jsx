const primary = ({data}) =>{
    return <div className="px-14 py-4 w-fit text-lg bg-secondary rounded-full border border-black ">{data}</div>
}
const secondary = ({data}) =>{
   return <div className="px-6 xxs:px-8 sm:px-14 py-2 sm:py-4 w-fit text-sm xxs:text-base sm:text-lg lg:text-2xl bg-secondary rounded-full">{data}</div>
}

const buttons = {
    primary,
    secondary,
}

export default buttons