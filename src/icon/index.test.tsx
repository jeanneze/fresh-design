/*
 * @Author: zhaojing834
 * @Date: 2023-06-06 15:57:11
 * @LastEditors: zhaojing834
 * @LastEditTime: 2023-06-21 18:54:18
 * @FilePath: /fresh-design/src/icon/index.test.tsx
 * @Descripttion: 单元测试
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Icon from './index';

// test('Ic', () => {
//     render(<Button>click me</Button>);
//     const linkElement = screen.getByText(/click me/i);
//     expect(linkElement).toBeInTheDocument();
// })
describe('Icon', () => {
    test('render Icon', () => {
    render(<Icon>click me</Icon>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
})
})

