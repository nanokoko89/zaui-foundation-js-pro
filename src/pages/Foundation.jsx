import React from "react";
import { Text, Icon, List } from "@/zaui";
const ColorBox = ({ title, bg }) => (
  <div
    className="box"
    style={{ background: bg, color: "#111", borderColor: "rgba(0,0,0,.08)" }}
  >
    {title}
  </div>
);
export default function Foundation() {
  return (
    <div className="section">
      <Text.Header>Foundation</Text.Header>
      <div className="grid">
        <div>
          <h3>Màu sắc (zmp-ui)</h3>
          <div className="row">
            <ColorBox title="Nền trắng" bg="#ffffff" />
            <ColorBox title="Nền xám" bg="#f7f8fa" />
            <ColorBox title="Màu chính" bg="#0068ff" />
            <ColorBox title="Màu nhấn" bg="#0a84ff" />
          </div>
        </div>
        <div>
          <h3>Corner Radius</h3>
          <div className="row">
            <div className="box" style={{ borderRadius: 8 }}>
              8
            </div>
            <div className="box" style={{ borderRadius: 12 }}>
              12
            </div>
            <div className="box" style={{ borderRadius: 16 }}>
              16
            </div>
            <div className="box" style={{ borderRadius: 24 }}>
              24
            </div>
          </div>
        </div>
        <div>
          <h3>Shadow Levels</h3>
          <div className="row">
            <div className="box">Level 0</div>
            <div className="box shadow-1">Level 1</div>
            <div className="box shadow-2">Level 2</div>
            <div className="box shadow-3">Level 3</div>
          </div>
        </div>
        <div>
          <h3>Typography</h3>
          <div className="grid">
            <Text.Header>Text.Header</Text.Header>
            <Text>Văn bản mặc định</Text>
            <Text size="small">Text nhỏ</Text>
          </div>
        </div>
        <div>
          <h3>Icons</h3>
          <div className="row">
            <Icon icon="zi-home" />
            <Icon icon="zi-user" />
            <Icon icon="zi-search" />
            <Icon icon="zi-settings" />
          </div>
        </div>
      </div>
      <List style={{ marginTop: 16 }}>
        <List.Item title="Mini App Logo" description="SVG">
          <div className="row">
            <img
              src="/src/assets/mini-app-logo.svg"
              alt="logo"
              width="56"
              height="56"
              style={{ borderRadius: 12 }}
            />
          </div>
        </List.Item>
      </List>
    </div>
  );
}
