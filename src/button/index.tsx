/*
 * @Author: zhaojing834 zhaojing834@jd.com
 * @Date: 2023-06-06 15:18:19
 * @LastEditors: zhaojing834
 * @LastEditTime: 2023-06-21 18:39:36
 * @FilePath: /fresh-design/src/button/index.tsx
 * @Description: 按钮组件
 */
import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './index.scss';

interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    type?: 'normal' | 'primary' | 'dashed' | 'link' | 'text';
    size?: 'small' | 'medium' | 'large';
    children?: ReactNode;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

const Button = (props: buttonProps) => {
    const { className, type='primary', size='medium', children, style, onClick, onBlur, ...others } = props;

    const cls = classNames({
        'ant-btn': true,
        [`ant-btn-${type}`]: type,
        [`ant-btn-${size}`]: size,
        [className as string]: !!className
    })

    return <button {...others} className={cls} style={style} onClick={onClick} onBlur={onBlur}>{children}</button>
}

export default Button;