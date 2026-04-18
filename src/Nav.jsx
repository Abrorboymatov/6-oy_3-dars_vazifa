import logo from '/src/assets/Logo.svg'

export function Nav() {
    

    return (
    <div className="flex justify-between items-center bg-[#232536] px-[30px] py-[28px] md:px-[160px]">
        <img src={logo} alt="" />
        <div className="hidden md:flex md:gap-4 md:text-[#FFFFFF] md:text-[16px] md:block ">
            <a className="hover:text-[green]" href="#">Home</a>
            <a className="hover:text-[green]" href="#">Service</a>
            <a className="hover:text-[green]" href="#">Company</a>
            <a className="hover:text-[green]" href="#">Career</a>
            <a className="hover:text-[green]" href="#">Blog</a>
            <a className="hover:text-[green]" href="#">Contact us</a>
            <a className="hover:text-[green]" href="#">Clone project</a>
        </div>
    </div>
    )
}