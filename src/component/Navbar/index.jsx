
const Navbar = (props) => {

    const { navList, icons } = props;

    return (
        <section className="sticky top-0 border-b-2 bg-[#48ceff] z-10">
            <div className="flex text-sm items-center justify-between mx-40 pt-1">
                <div className="flex items-center justify-center gap-3">
                    <p>{icons[0].icon}</p>
                    <p>+62-813-8167-0974</p>
                </div>
                <div className="flex items-center justify-center gap-5">
                    {icons.filter(icon => (icon.id !== 1 && icon.id !== 6)).map(icons => (
                        <p key={icons.id} className="text-[20px]">{icons.icon}</p>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-center my-3">
                <div className="flex items-center justify-center gap-10 font-semibold">
                    {
                        navList.map((list, index) => (
                            <a href={ 
                                index == 0 ? 
                                `#`
                                :
                                `#`+(index)
                                } >
                                <p key={index} className="hover:scale-110 delay-150 duration-300">{list}</p>
                            </a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Navbar;