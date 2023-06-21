/*
 * @Author: zhaojing834
 * @Date: 2023-06-06 15:57:11
 * @LastEditors: zhaojing834
 * @LastEditTime: 2023-06-21 18:33:08
 * @FilePath: /fresh-design/src/stories/index.test.tsx
 * @Descripttion: 单元测试
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './index';

test('render learn react link', () => {
    render(<Button>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
})

test('renders primary button', () => {
    const { container } = render(<Button type='primary'>click me</Button>);
    expect(container.querySelector('.ant-btn-primary')).toBeInTheDocument();
})

test('should support click', () => {
    const onClick = jest.fn();
    render(<Button type='primary' onClick={onClick}>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);
    expect(onClick).toBeCalled();
})

