import { Link, NavLink } from "@remix-run/react";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <HomeLink />
      <NavBar />
    </header>
  );
}

export function HomeLink() {
  return (
    <Link to="/" prefetch="intent" className="text-xl">
      PFPA
    </Link>
  );
}

export type RouteLink = { id: number; url: string; label: string };

const ROUTES: RouteLink[] = [
  {
    id: 1,
    url: "/products",
    label: "Products",
  },
  {
    id: 2,
    url: "/users",
    label: "Users",
  },
];

export function NavBar() {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        {ROUTES.map((route) => {
          const { id, url, label } = route;

          return (
            <li key={id}>
              <NavLink to={url} className={isActiveLink} prefetch="intent" end>
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function isActiveLink({ isActive }: { isActive: boolean }) {
  return isActive ? "link-active" : "";
}
