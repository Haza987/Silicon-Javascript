import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <section className="page-title">
      <div className="breadcrumb-container">
        <ul className="breadcrumb">
          <li><Link to="/" className="breadcrumb-link"><i className="fa-regular fa-house"></i> Home</Link></li>
          <p> -&gt; </p>
          {
            pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;

              return (
                <li key={to}>
                  {index === pathnames.length - 1
                    ? (<span>{value.replace(/-/g, ' ')}</span>)
                    : (<Link to={to}>{value.replace(/-/g, ' ')}</Link>)}
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default Breadcrumb