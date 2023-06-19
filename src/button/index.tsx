/*
 * @Author: zhaojing834 zhaojing834@jd.com
 * @Date: 2023-06-06 15:18:19
 * @LastEditors: zhaojing834
 * @LastEditTime: 2023-06-06 17:30:02
 * @FilePath: /fresh-design/src/button/index.tsx
 * @Description: 按钮组件
 */
import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './index.css';

interface buttonProps {
    className?: string;
    type?: 'normal' | 'primary';
    children?: ReactNode;
}

const Button = (props: buttonProps) => {
    const { className, type, children } = props;

    const cls = classNames({
        'fresh-btn': true,
        [`fresh-btn-${type}`]: type,
        [className as string]: !!className
    })

    return <button className={cls}>{children}</button>
}

export default Button;