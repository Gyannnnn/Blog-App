import { Navbar, TextInput, Button } from "flowbite-react";
import React from "react";
import { Link ,useLocation} from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";

const Header = () => {
    const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 ">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl dark:text-white font-semibold"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-zinc-500 to-pink-500 rounded-lg text-white">
          Gyan's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search ...."
          rightIcon={IoSearch}
          className="hidden sm:inline"
        />
      </form>
      <Button className="w-10 self-center h-10 lg:hidden" color="gray" pill>
        <IoSearch />
      </Button>
      <div className="flex gap-2 sm:order-2" >
        <Button className="w-10 h-10" pill color="gray">
          <BsMoonStars />
        </Button>
        <Button gradientDuoTone="purpleToBlue">Sign In</Button>
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as='div'>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as='div'>
            <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as='div'>
            <Link to='/projects' >Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
