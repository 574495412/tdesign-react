import React, { useState } from 'react';
import { Cascader } from 'tdesign-react';

export default function Example() {
  const [value1, setValue1] = useState('1.2.2');
  const [value2, setValue2] = useState(['1.1.2.1', '2']);
  const options = [
    {
      value: '1',
      label: '1',
      children: [
        {
          value: '1.1',
          label: '1.1',
          children: [
            {
              value: '1.1.1',
              label: '1.1.1',
              children: [
                {
                  value: '1.1.1.1',
                  label: '1.1.1.1',
                },
                {
                  value: '1.1.1.2',
                  label: '1.1.1.2',
                },
              ],
            },
            {
              value: '1.1.2',
              label: '1.1.2',
              children: [
                {
                  value: '1.1.2.1',
                  label: '1.1.2.1',
                },
                {
                  value: '1.1.2.2',
                  label: '1.1.2.2',
                },
              ],
            },
          ],
        },
        {
          value: '1.2',
          label: '1.2',
          children: [
            {
              value: '1.2.1',
              label: '1.2.1',
              children: [
                {
                  value: '1.2.1.1',
                  label: '1.2.1.1',
                },
                {
                  value: '1.2.1.2',
                  label: '1.2.1.2',
                },
              ],
            },
            {
              value: '1.2.2',
              label: '1.2.2',
              children: [
                {
                  value: '1.2.2.1',
                  label: '1.2.2.1',
                },
                {
                  value: '1.2.2.2',
                  label: '1.2.2.2',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      value: '2',
      label: '2',
      children: [
        {
          value: '2.1',
          label: '2.1',
        },
        {
          value: '2.2',
          label: '2.2',
        },
      ],
    },
  ];

  const itemStyle = {
    marginTop: '16px',
  };

  const onChange1 = (value) => {
    setValue1(value);
  };
  const onChange2 = (value) => {
    setValue2(value);
  };

  return (
    <div className="tdesign-demo-block-column">
      <Cascader
        style={itemStyle}
        options={options}
        value={value1}
        onChange={onChange1}
        placeholder="请选择"
        checkStrictly
      />
      <Cascader
        style={itemStyle}
        options={options}
        value={value2}
        onChange={onChange2}
        placeholder="请选择"
        checkStrictly
        multiple
      />
    </div>
  );
}
