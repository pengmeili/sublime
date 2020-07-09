import React from "react";
import {Layout, Form, Button, Checkbox, Input, Divider, Select, Space} from 'antd'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons'
const { Header, Footer, Sider, Content } = Layout
const { Option } = Select

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
}

class TestLayout extends React.Component {
  render() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            breakpoint="md"
            onBreakpoint={broken => {
              console.log(`broken:${broken}`)
            }}
            theme="dark"
            width="300px"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => {
              console.log(collapsed,type)
            }}
          ></Sider>
          <Layout>
            <Header></Header>
            <Content style={{ padding: '30px', background: '#fff' }}>
              <Divider orientation="left" plain>基本表单</Divider>
              <FormDome />
              <Divider orientation="left" plain>form.UseForm</Divider>
              <UseForm/>
              <Divider orientation="left" plain>form.List</Divider>
              <FormList />
            </Content>
            <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

function FormDome() {
  const onFinish = values => {
    console.log(values)
  }

  const onFinishFailed = errorInfo => {
    console.log(errorInfo)
  }

  return(
    <div style={ {width: '400px'} }>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="username"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="password"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码'
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

/* form.useForm对表单数据域进行交互  useForm是react Hooks实现的，只能用于函数组件， */
function UseForm() {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log(values)
  }

  const onGenderChange = value => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!'
        })
        return;
      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!'
        })
        return;
      case 'other':
        form.setFieldsValue({
          note: 'Hi, there！'
        })
        break;
      default:
        break;
    }
  }

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male'
    })
  }

  const resetForm = () => {
    form.resetFields()
  }

  return(
    <div style={{ width: '400px' }}>
      <Form {...layout} form={form} name={'control-hooks'} onFinish={onFinish}>
        <Form.Item
          name="note"
          label="Note"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Select
            placeholder="请选择性别"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={((prevValues, nextValues) => prevValues.gender !== nextValues.gender)}
        >
        {({ getFieldValue }) => getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true
                }
              ]}
            >
              <Input />
            </Form.Item>
          ): null
        }
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={resetForm}>Reset</Button>
            <Button type="link" htmlType="button" onClick={onFill}>Fill Form</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

/* form.List 动态添加/删除表单项 */

function FormList() {
  const onFinish = values => {
    console.log(values)
  }
  return(
    <div style={{ width: '400px' }}>
      <Form name="dynamic_form_item" { ...tailLayout } onFinish={onFinish}>
        <Form.List name="names">
          {(fields, {add, move, remove}) => {
            return (
              <div>
                {
                  fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0?layout:tailLayout)}
                      label={ index === 0 ? 'Passengers': '' }
                      required={ false }
                      key={ field.key }
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: '请输入用户名或是删除它'
                          }
                        ]}
                        noStyle
                      >
                        <Input style={{ width: '70%' }} />
                      </Form.Item>
                      {
                        fields.length > 1 ? (
                          <MinusCircleOutlined
                            style={{ marginLeft: '8px' }}
                            onClick={() => {
                              remove(field.name)
                            }}
                          />
                        ):null
                      }
                    </Form.Item>
                  ))
                }
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add()
                    }}
                  >
                    <PlusOutlined />add field
                  </Button>
                </Form.Item>
              </div>
            )
          }}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default TestLayout;


/*
* Layout.Sider:
*   breakpoint:
*     xs: 480px
*     sm: 576px
*     md: 768px
*     lg: 992px
*     xl: 1200px
*     xxl: 1600px
*
*  */
