"use client";

type NavItemProps = {
  name: string;
  link?: string;
};

const NavItem: React.FC<NavItemProps> = ({ name, link }) => {
  return (
    <div className="inline-block overflow-hidden group">
      {name}
      <span className="inline-block overflow-hidden w-full h-[2px] bg-white -translate-x-full group-hover:translate-x-0 transition-all"></span>
    </div>
  );
};

export default NavItem;
