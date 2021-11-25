export default function Button({children}) {
    return (
        <a className="border border-green-500 text-white-500 py-3 px-10 text-lg font-semibold rounded-full"> 
            {children} 
        </a>
    )
}