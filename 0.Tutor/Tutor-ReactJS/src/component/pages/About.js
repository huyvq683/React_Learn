import React, { useEffect, useState } from "react";
import { Form, Input, Button, Table, Radio, Checkbox, Select, Space } from "antd";

const About = () => {

  let [listSP, setListSP] = useState([])
  let [ma, setMa] = useState("");


  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [address, setAddress] = useState("");
  let [hobbies, setHobbies] = useState([]);
  let [gender, setGender] = useState("Male");
  let [country, setCountry] = useState("");
  
  const [form] = Form.useForm();
  const [data, setData] = useState([]);

  const onFinish = (values) => {
    const newData = {
      key: Date.now(),
      ...values,
    };
    setData([...data, newData]);
    form.resetFields();
  };

  return (
    <div className="test">
      <Form form={form} onFinish={onFinish}>
        <Form.Item label="Name" rules={[{ required: true }]}>
          <Input value={name} onChange={e => setName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Age" rules={[{ required: true }]}>
          <Input value={age} onChange={e => setAge(e.target.value)} />
        </Form.Item>
        <Form.Item label="Address" rules={[{ required: true }]}>
          <Input value={address} onChange={e => setAddress(e.target.value)} />
        </Form.Item>
        <Form.Item label="Hobbies">
          <Checkbox.Group value={hobbies} onChange={(value) => setHobbies(value)}>
            <Checkbox value="Reading">Reading</Checkbox>
            <Checkbox value="Sports">Sports</Checkbox>
            <Checkbox value="Cooking">Cooking</Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="Gender" rules={[{ required: true }]}>
          <Radio.Group value={gender} onChange={(e) => setGender(e.target.value)}>
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Country" rules={[{ required: true }]}>
          <Select value={country} onChange={(value) => setCountry(value)}>
            <Select.Option value="USA">USA</Select.Option>
            <Select.Option value="Canada">Canada</Select.Option>
            <Select.Option value="UK">UK</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={add}>
            Add
          </Button>
        </Form.Item>
      </Form>
      <Table dataSource={list} rowKey="id" columns={columns} />
    </div>
  );
};

export default About;
