import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { App, Page, Header, BottomNavigation, Icon, Button } from "@/zaui";

export default function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeKey = location.pathname.startsWith("/home")
    ? "home"
    : location.pathname.startsWith("/display")
      ? "display"
      : location.pathname.startsWith("/form")
        ? "form"
        : location.pathname.startsWith("/foundation")
          ? "foundation"
          : "home";

  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <App>
      <Page className="container">
        {isMobile && (
          <Header
            title="ZAUI Foundation (JS Pro)"
            right={
              <div style={{ display: "flex", gap: 8 }}>
                <Button size="small" onClick={() => navigate("/foundation")}>
                  Foundation
                </Button>
              </div>
            }
          />
        )}
        <Outlet />
      </Page>
      {isMobile && (
        <BottomNavigation
          fixed
          activeKey={activeKey}
          onChange={(k) => {
            if (k === "home") navigate("/home");
            if (k === "display") navigate("/display");
            if (k === "form") navigate("/form");
            if (k === "foundation") navigate("/foundation");
          }}
        >
          <BottomNavigation.Item
            itemKey="home"
            label="App"
            icon={<Icon icon="zi-home" />}
          />
          <BottomNavigation.Item
            itemKey="display"
            label="Display"
            icon={<Icon icon="zi-calendar" />}
          />
          <BottomNavigation.Item
            itemKey="form"
            label="Form"
            icon={<Icon icon="zi-chat" />}
          />
          <BottomNavigation.Item
            itemKey="foundation"
            label="Foundation"
            icon={<Icon icon="zi-setting" />}
          />
        </BottomNavigation>
      )}
    </App>
  );
}
