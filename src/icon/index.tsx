/*
 * @Author: zhaojing834 zhaojing834@jd.com
 * @Date: 2023-06-06 15:18:19
 * @LastEditors: zhaojing834
 * @LastEditTime: 2023-06-21 20:03:49
 * @FilePath: /fresh-design/src/icon/index.tsx
 * @Description: 按钮组件
 */
import React, { ReactNode } from 'react';
import classNames from 'classnames';

import './index.scss';

interface iconProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    type?: 'fixed';
    size?: number;
}

const Icon = (props: iconProps) => {
    const { className, type='primary', size=20, ...others } = props;

    const cls = classNames({
        'ant-icon': true,
        [className as string]: !!className
    })

    const style: React.CSSProperties = {};
    if (size) {
        style.width = size;
        style.height = size;
    }

    return <i />
}

export default Icon;