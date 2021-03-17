import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table, Tag, Space, Checkbox, Button, Select, Cascader, Input, InputNumber } from 'antd';

const { Column, ColumnGroup } = Table;

//для селекта 
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

//для инпутнамбера
function onChangeInpNum(value) {
  console.log('changed', value);
}

function onChangeChkBox(checkedValues) {
  console.log('checked = ', checkedValues);
}

const data = [
  {
    key: '1',
    col1: 'Тип оповещения',
    col2:
      <Select defaultValue="e-mail" size="small" onChange={handleChange}>
        <Option value="sms">SMS</Option>
        <Option value="e-mail">e-mail</Option>
      </Select>,
    col3: 'Электронный адрес',
    col4: <Input size="small" placeholder="pilyar@teplo-inform.ru" />,    
  },
  {
    key: '2',
    col1: 'Сообщений подряд',
    col2: <InputNumber size="small" min={1} max={10} defaultValue={3} onChange={onChangeInpNum} />,
    col3: <Checkbox  value="ch1" onChange={onChangeChkBox}>Отсутствие связи с прибором</Checkbox>,
    col4: <Button type="primary" size="small">Выбрать</Button>,
  },
   {
    key: '3',
    col1: <Checkbox  value="ch2" onChange={onChangeChkBox}>Групповые условия</Checkbox>,
    col2: <Button type="primary" size="small">Выбрать</Button>,
    col3: <Checkbox  value="ch3" onChange={onChangeChkBox}>Срабатывание датчиков</Checkbox>,
    col4: <Button type="primary" size="small">Выбрать</Button>,

    
  },
  {
    key: '4',
    col1: <Checkbox  value="ch4" onChange={onChangeChkBox}>Контроль переменных</Checkbox>,
    col2: <Button type="primary" size="small">Выбрать</Button>,
    col3: <Checkbox  value="ch5" onChange={onChangeChkBox}>Сообщения о поверке</Checkbox>,
    col4: <Button type="primary" size="small">Выбрать</Button>,
  
    
  },
  {
    key: '5',
    col1: <Checkbox  value="ch6" onChange={onChangeChkBox}>Неверное время прибора</Checkbox>,
    col2: <Button type="primary" size="small">Выбрать</Button>,
    col3: <Checkbox  value="ch7" onChange={onChangeChkBox}>Изменение параметров прибора</Checkbox>,
    col4: <Button type="primary" size="small">Выбрать</Button>,
  },
  {
    key: '6',
    col1: <Checkbox  value="ch8" onChange={onChangeChkBox}>Условия прибора</Checkbox>,
    col2: <Button type="primary" size="small">Выбрать</Button>,
    col3: <Checkbox  value="ch9" onChange={onChangeChkBox}>Высылать месячные отчёты</Checkbox>,
    col4: <Button type="primary" size="small">Выбрать</Button>,
  },
  
];

ReactDOM.render(
  <>
  <Table dataSource={data}>
    <Column title="" dataIndex="col1" key="col1" />
    <Column title="" dataIndex="col2" key="col2" />
    <Column title="" dataIndex="col3" key="col3"/>
    <Column title="" dataIndex="col4" key="col4"/>
  </Table>
  <Button type="primary">Добавить</Button>
    <a> </a>
  <Button>Отмена</Button>
  </>,
  document.getElementById('container'),
);