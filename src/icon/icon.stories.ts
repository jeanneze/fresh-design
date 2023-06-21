/*
 * @Author: zhaojing834
 * @Date: 2023-06-21 18:43:56
 * @LastEditors: zhaojing834
 * @LastEditTime: 2023-06-21 18:46:35
 * @FilePath: /fresh-design/src/icon/icon.stories.ts
 * @Descripttion: 业务描述
 */
import type { Meta, StoryObj } from '@storybook/react';

import Icon from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Icon> = {
  title: 'Example/Button',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    type: 'fixed',
  },
};

export const Secondary: Story = {
  args: {
    type: 'normal',
    children: 'Button',
  },
};

const style={
  marginLeft: 8
}

// export const Basic = () => {
//   return <>
//     <Button type="primary">Primary Button</Button>
//     <Button style={style}>Default Button</Button>
//     <Button type="dashed" style={style}>Dashed Button</Button>
//     <Button type="text">Text Button</Button>
//     <Button type="link" style={style}>Link Button</Button>
//   </>
// }