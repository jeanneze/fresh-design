/*
 * @Author: zhaojing834
 * @Date: 2023-06-06 15:57:11
 * @LastEditors: zhaojing834
 * @LastEditTime: 2023-06-19 17:57:01
 * @FilePath: /fresh-design/src/stories/index.test.tsx
 * @Descripttion: 业务描述
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

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

