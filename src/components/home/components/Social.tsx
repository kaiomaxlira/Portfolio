import React from 'react';
import { GithubOutlined } from "@ant-design/icons";

const IconLink = ({ href, onClick }) => {
  return (
    <a href={href} onClick={onClick}>
      <GithubOutlined  size={24} />
    </a>
  );
};

export default IconLink;