import React from "react";
import { Avatar, List, ImageViewer, Text, Icon } from "@/zaui";
import { Calendar, Radio } from "zmp-ui";

export default function DisplayDemo() {
  return (
    <div className="section">
      <Text.Header>Data Display</Text.Header>
      <List>
        <List.Item
          prefix={<Avatar online src="https://i.pravatar.cc/80?img=1" />}
          title="Người dùng A"
          description="Mô tả ngắn"
          suffix={<Icon icon="zi-chevron-right" />}
        />
        <List.Item
          prefix={<Avatar text="B" />}
          title="Người dùng B"
          description="Có Image Viewer"
          suffix={<ImageViewer src="https://picsum.photos/seed/2/240/160" />}
        />
      </List>
      {/* <Calendar className="my-calendar" /> */}
      <Radio.Group
        defaultValue="male"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "flex-start",
        }}
        options={[
          {
            label: "Xe 4 chỗ",
            value: "male",
          },
          {
            label: "Xe 7 chỗ",
            value: "female",
          },
          {
            label: "Xe 16 chỗ",
            value: "other",
          },
        ]}
      />
    </div>
  );
}
