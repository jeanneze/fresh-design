/*
 * @Author: zhaojing834
 * @Date: 2023-06-06 15:57:11
 * @LastEditors: zhaojing834
 * @LastEditTime: 2023-06-06 17:18:29
 * @FilePath: /fresh-design/src/button/index.test.tsx
 * @Descripttion: 业务描述
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

test('render learn react link', () => {
    render(<Button>click me</Button>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
})
