import React from "react";
import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
  const user = {
    name: "John Doe",
    email: "john_doe@test.com",
    avatar: "https://api.dicebear.com/9.x/pixel-art/svg?seed=JohnDoe",
  };
  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img
          src="/assets/icons/logo.svg"
          alt="logo"
          className="w-[30px] h-[30px]"
        />
        <h1>Travela</h1>
      </Link>

      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn('group nav-item', {
                    'bg-primary-100 !text-white': isActive,
                  })} onClick={handleClick}>
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? "brightness-0 invert" : "text-dark-200"}`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
        <footer className="nav-footer">
          <img
            src={
              user?.avatar ||
              "https://api.dicebear.com/9.x/pixel-art/svg?seed=JohnDoe"
            }
            alt={user?.name || "User Avatar"}
          />
          <article>
            <h4>{user?.name || "John Doe"}</h4>
            <p>{user?.email || "john_doe@test.com"}</p>
          </article>

          <button 
            onClick={() => {
              console.log('logout')
            }}
            className="cursor-pointer"
          >
            <img src="/assets/icons/logout.svg" alt="logout"
            className="size-6" />

          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
