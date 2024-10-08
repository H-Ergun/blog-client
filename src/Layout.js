// components/Layout.js
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My App Header</h1>
        {/* Menü veya navigasyon */}
      </header>
      <div style={{ display: "flex" }}>
        <aside style={{ width: "200px", background: "#f4f4f4" }}>
          {/* Sidebar içeriği */}
          <nav>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/company-relations">Company Relations</a>
              </li>
              <li>
                <a href="/company">Company</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main style={{ marginLeft: "200px", padding: "20px" }}>
          {/* Sayfa içerikleri buraya gelir */}
          {children}
        </main>
      </div>
      <footer>
        <p>My App Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
