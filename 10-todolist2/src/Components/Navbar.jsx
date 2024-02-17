
const Navbar = () => {
  return (
    <nav className="flex justify-around items-center p-2 bg-violet-900 text-violet-400 h-10">
        <div className="logo text-xl">iTodo</div>
        <ul className="flex gap-10">
            <li>Ritesh Kumar Rai</li>
            <li><a href="https://github.com/Ritesh-Kumar-Rai" target="_blank" rel="noopener noreferrer"><i className="ri-github-fill"></i></a></li>
        </ul>
    </nav>
  )
}

export default Navbar