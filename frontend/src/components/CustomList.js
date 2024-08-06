/** @format */

import React from "react";
import { List } from "antd";

function CustomList({ list }) {
  return (
    <List
      dataSource={list}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta title={item.name} description={item.description} />
        </List.Item>
      )}
    />
  );
}

export default CustomList;
