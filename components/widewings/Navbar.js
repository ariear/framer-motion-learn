export default function Navbar() {
    return (
        <nav className="flex items-center justify-between container mx-auto py-10 px-3 font-medium text-lg">
            <div className="flex items-center">
                <p className="mr-9">Work</p>
                <p>Services</p>
            </div>
            <p className="tracking-[0.3em] text-xl font-semibold">WIDE WINGS</p>
            <div className="flex items-center">
                <p className="mr-9">About</p>
                <p className="mr-9">Contact</p>
                <p>EN</p>
            </div>
        </nav>
    )
}