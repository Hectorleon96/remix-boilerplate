import { useLocation } from "@remix-run/react";

export default function RouteNotFound() {
  const { pathname, search } = useLocation();

  return (
    <div>
      <h1>UPS</h1>
      <p className="text-lg">
        Page: &nbsp;
        <span className="font-semibold">
          {pathname}
          {search}
        </span>
        &nbsp; not found
      </p>

      <br />
      <a onClick={() => window.history.back()} className="link-active">
        Return to previous page
      </a>
    </div>
  );
}
