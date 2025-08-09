import React from "react";
import {
  Text,
  Tabs,
  Icon,
  ImageViewer,
  Progress,
  Spinner,
  Swiper,
} from "@/zaui";
import logoUrl from "@/assets/mini-app-logo.svg";
import { Calendar } from "zmp-ui";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";

export default function Home() {
  const [active, setActive] = useState("home");

  return (
    <div style={{ display: "flex", backgroundColor: "red" }}>
      <Sidebar active={active} onChange={setActive} />
      <Dashboard />
      {/* <div className="section">
        <span className="badge">Starter</span>
        <img
          src={logoUrl}
          alt="Mini App Logo"
          style={{ width: 72, height: 72, borderRadius: 16 }}
        />
        <Text.Header>Giao diện chuẩn zmp-ui</Text.Header>
        <Text>
          Dùng trực tiếp <span className="code">zmp-ui</span> để giống hệt Mini
          App.
        </Text>
        <div style={{ marginTop: 16 }}>
          <Tabs defaultActiveKey="one">
            <Tabs.Tab title="Display" key="one">
              <div className="grid">
                <div>
                  <Icon icon="zi-check-circle" /> Icon mẫu
                </div>
                <ImageViewer src="https://picsum.photos/seed/zaui/640/360" />
                <Progress percent={60} />
                <Spinner visible />
                <Calendar />
              </div>
            </Tabs.Tab>
            <Tabs.Tab title="Swiper" key="two">
              <Swiper>
                <Swiper.Slide>
                  <div
                    style={{
                      height: 120,
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    Slide 1
                  </div>
                </Swiper.Slide>
                <Swiper.Slide>
                  <div
                    style={{
                      height: 120,
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    Slide 2
                  </div>
                </Swiper.Slide>
                <Swiper.Slide>
                  <div
                    style={{
                      height: 120,
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    Slide 3
                  </div>
                </Swiper.Slide>
              </Swiper>
            </Tabs.Tab>
          </Tabs>
        </div>
      </div> */}
    </div>
  );
}
