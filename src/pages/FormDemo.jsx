import React, { useState } from 'react'
import { List, Button, Input, Select, Picker, DatePicker, Switch, Checkbox, Radio, Slider, Modal, Sheet, Text } from '@/zaui'
import ActionSheet from '@/components/ActionSheet.jsx'

export default function FormDemo(){
  const [value, setValue] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [actionOpen, setActionOpen] = useState(false)

  return (
    <div className="section">
      <Text.Header>Form & Feedback</Text.Header>
      <List>
        <List.Item title="Input" description="Input thường">
          <Input label="Label" helperText="Helper text" value={value} onChange={(e)=>setValue(e.target.value)} />
        </List.Item>
        <List.Item title="Password"><Input.Password label="Mật khẩu" visibilityToggle placeholder="••••••" /></List.Item>
        <List.Item title="Search"><Input.Search label="Tìm kiếm" onSearch={(txt)=>console.log('search:', txt)} loading /></List.Item>
        <List.Item title="TextArea"><Input.TextArea label="Ghi chú" showCount autoSize /></List.Item>
        <List.Item title="OTP"><Input.OTP otpLength={6} show /></List.Item>
        <List.Item title="Select">
          <Select label="Chọn 1">
            <Select.Option value="a" title="A" />
            <Select.Option value="b" title="B" />
            <Select.Option value="c" title="C" />
          </Select>
        </List.Item>
        <List.Item title="Picker">
          <Picker title="Chọn số" value={[1]} data={[[{label:'1',value:1},{label:'2',value:2},{label:'3',value:3}]]} />
        </List.Item>
        <List.Item title="DatePicker"><DatePicker title="Chọn ngày" /></List.Item>
        <List.Item title="Switch"><Switch defaultChecked /></List.Item>
        <List.Item title="Checkbox"><Checkbox>Đồng ý điều khoản</Checkbox></List.Item>
        <List.Item title="Radio">
          <Radio.Group defaultValue="1"><Radio value="1">Một</Radio><Radio value="2">Hai</Radio></Radio.Group>
        </List.Item>
        <List.Item title="Slider"><Slider defaultValue={40} /></List.Item>
      </List>

      <div style={{ display:'flex', gap:8, marginTop:16, flexWrap:'wrap' }}>
        <Button highLight onClick={()=>setModalOpen(true)}>Open Modal</Button>
        <Button onClick={()=>setSheetOpen(true)}>Open Sheet</Button>
        <Button danger onClick={()=>setActionOpen(true)}>Open ActionSheet</Button>
      </div>

      <Modal visible={modalOpen} title="Modal" description="Nội dung mô tả"
             onClose={()=>setModalOpen(false)}
             actions={[{ text:'Đóng', close:true }, { text:'Xác nhận', highLight:true, onClick:()=>setModalOpen(false) }]} />
      <Sheet visible={sheetOpen} onClose={()=>setSheetOpen(false)} title="Sheet">
        <div style={{ padding:12 }}>Sheet content...</div>
      </Sheet>
      <ActionSheet visible={actionOpen} title="Hành động" onClose={()=>setActionOpen(false)}
                   actions={[{ text:'Sao chép', close:true }, { text:'Xoá', danger:true }]} />
    </div>
  )
}
