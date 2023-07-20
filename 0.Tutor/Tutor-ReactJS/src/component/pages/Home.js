import React, { useEffect, useState } from "react";
import { Form, Input, Button, Table, Radio, Checkbox, Select, Space } from "antd";
import "./home.css";




const Home = () => {

  // let [count, setCount] = useState(0);
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [address, setAddress] = useState("");
  let [hobbies, setHobbies] = useState([]);
  let [gender, setGender] = useState("Male");
  let [country, setCountry] = useState("");
  let [check, setCheck] = useState(false);

  let [bien1 , setBien1] = useState(0);
  let [bien2 , setBien2] = useState(0);
  // let [result , setReusult] = useState(false);

  // const create = () =>{
  //   // Gọi api thêm ở BE
  //   // Sau đó return result - giá trị trả về ở phía BE
  //   setReusult(true);
  // }

  let [list, setList] = useState([
    {
      id: 1,
      name: "Home",
      age: 34,
      address: "China",
      hobbies: ["Reading"],
      gender: "Male",
      country: "Canada",
    }, {
      id: 2,
      name: "Home",
      age: 34,
      address: "China",
      hobbies: ["Reading"],
      gender: "Male",
      country: "Canada",
    }, {
      id: 3,
      name: "Home",
      age: 34,
      address: "China",
      hobbies: ["Cooking"],
      gender: "Male",
      country: "UK",
    }, {
      id: 4,
      name: "Home",
      age: 34,
      address: "China",
      hobbies: ["Reading", "Cooking"],
      gender: "Male",
      country: "UK",
    }, {
      id: 5,
      name: "Home",
      age: 34,
      address: "China",
      hobbies: ["Sports"],
      gender: "Male",
      country: "USA",
    }
  ])

  const handleClickBien1 = () => {
    setBien1(bien1 + 1);
    // setReusult(false);
  }

  const handleClickBien2 = () => {
    setBien2(bien2 + 1);
  }

  useEffect(() => {
    
  }, [list])

  // useEffect(() => {
  //   console.log("Biến 1 vừa thay đổi");
  //   console.log("Biến 2 vừa thay đổi");
  // }, [bien1, bien2])

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

  const add = () => {
    let newData = {
      id: list.length + 1,
      name: name,
      age: age,
      address: address,
      hobbies: hobbies,
      gender: gender,
      country: country
    };
    setList([newData, ...list]);
  }

  const columns = [
    {
      title: "Mã",
      dataIndex: "ma",
      key: "ma",
    },
    {
      title: "Ten",
      dataIndex: "ten",
      key: "ten",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          <Button key="detail" type="primary" htmlType="submit" onClick={() => handleDetail(record.id)}>Detail</Button>
          <Button key="delete" type="primary" htmlType="submit" onClick={() => handleDelete(record.id)}>Delete</Button>
          <Button key="update" type="primary" htmlType="submit" onClick={() => handleUpdate(record.id)}>Update</Button>
        </Space>
      )
    },
  ];

  // getOne ra bản ghi
  const searchBanGhi = (id) => {
    return list.find((item) => item.id === id)
  }

  // Detail
  const handleDetail = (id) => {
    let object = searchBanGhi(id);
    setName(object.name)
    setAge(object.age)
    setAddress(object.address)
    setHobbies(object.hobbies)
    setGender(object.gender)
    setCountry(object.country)
    setCheck(true)
  }

  // Update
  const handleUpdate = (id) => {
    if (check === false) {
      alert("Bạn cần chọn bản ghi để update");
      return;
    } else {
      let newData = {
        name: name,
        age: age,
        address: address,
        hobbies: hobbies,
        gender: gender,
        country: country
      };
      let updateList = list.map((item) => {
        if (item.id === id) {
          return {...item, ...newData};
        } else {
          return item;
        }
      });
      setList(updateList);
    }
  }
  // Xóa
  const handleDelete = (id) => {
    let updateList = list.filter((item) => item.id !== id); // Lấy ra 1 list không chứa bản ghi có id như id truyền vào
    setList(updateList); // set list mới vào state
  }

  return (
    <div className="test">
      <span>{bien1}</span><br />
      <button onClick={handleClickBien1}>Tăng dần</button> <br />
      <span>{bien2}</span><br />
      <button onClick={handleClickBien2}>Tăng dần</button> <br />
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

export default Home;
