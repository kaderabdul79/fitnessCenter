import React from 'react';

const CustomBtn = ({onClickItem,btnPadding,children}) => {
    return <button onClick={onClickItem} className="btnstyle">{children}</button>;
};

export default CustomBtn;