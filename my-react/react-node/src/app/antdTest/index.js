import React from "react";
import { Button, Radio, Space } from "antd";
import { DownloadOutlined, PoweroffOutlined } from '@ant-design/icons'

function AntTest() {
  const style = {
    width: 500,
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  return(
    <div style={style}>
      <ButtonSize/>
      <EnterLoading />
    </div>
  )
}

class ButtonSize extends React.Component{
  constructor(props) {
    super(props);
    this.state = { size: 'large' }
  }

  changeSize(e){
    this.setState({
      size: e.target.value
    })
  }

  render() {
    const { size } = this.state;

    return(
      <div>
        <Radio.Group value={size} onChange={this.changeSize.bind(this)}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br />
        <br />
        {/* 按钮 */}
        <Space>
          <Button size={size} type="primary">Primary</Button>
          <Button size={size} type="default">default</Button>
          <Button size={size} type="dashed">dashed</Button>
          <Button size={size} type="link">Link</Button>
        </Space>
        <br />
        <br />
        {/* 带图标按钮 */}
        <Space>
          <Button size={size} type="primary" icon={<DownloadOutlined />}></Button>
          <Button size={size} type="primary">action<DownloadOutlined /></Button>
          <Button size={size} type="primary" href="https://www.baidu.com" target="_blank">action<DownloadOutlined /></Button>
          <Button size={size} type="primary" shape="circle" icon={<DownloadOutlined />}></Button>
          <Button size={size} type="primary" shape="round" icon={<DownloadOutlined />}></Button>
          <Button size={size} type="primary" shape="round" icon={<DownloadOutlined />}>download</Button>
          <Button size={size} type="primary" icon={<DownloadOutlined />}>download</Button>
        </Space>
      </div>
    )
  }
}

class EnterLoading extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loadings: []
    }
  }

  enterChangeLoading(index){
    const newLoadings = [...this.state.loadings]; // 复制一份出来不影响原始数据
    newLoadings[index] = true;
    console.log(newLoadings)
    this.setState({
      loadings: newLoadings
    })
    setTimeout(() => {
      newLoadings[index] = false;
      this.setState({
        loadings: newLoadings
      })
    },3000)
  }

  render() {
    const { loadings } = this.state;
    return(
      <>
        <Space>
          <br />
          <Button type="primary" loading>Loading</Button>
          <Button type="primary" size="small" loading>Loading</Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading>Loading</Button>
        </Space>
        <Space>
          <br/><br/>
          <Button type="primary" loading={loadings[0]} onClick={this.enterChangeLoading.bind(this,0)}>Click me!</Button>
          <Button type="primary" loading={loadings[1]} icon={<PoweroffOutlined />} onClick={this.enterChangeLoading.bind(this,1)}>Click me!</Button>
          <Button type="primary" loading={loadings[2]} icon={<PoweroffOutlined />} onClick={this.enterChangeLoading.bind(this,2)} />
        </Space>
      </>
    )
  }
}

export default AntTest;
