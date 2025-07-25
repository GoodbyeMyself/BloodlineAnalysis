import React from 'react';
import { Modal, Descriptions, Tag } from 'antd';

interface TableDetailModalProps {
    visible: boolean;
    onCancel: () => void;
    tableData: any;
}

const TableDetailModal: React.FC<TableDetailModalProps> = ({
    visible,
    onCancel,
    tableData,
}) => {
    if (!tableData) return null;

    return (
        <Modal
            title="表详情"
            open={visible}
            onCancel={onCancel}
            footer={null}
            width={600}
        >
            <Descriptions column={1} bordered>
                <Descriptions.Item label="表名">
                    {tableData.label || tableData.id}
                </Descriptions.Item>
                <Descriptions.Item label="层级">
                    {tableData.level}
                </Descriptions.Item>
                <Descriptions.Item label="字段数量">
                    {tableData.attrs?.length || 0}
                </Descriptions.Item>
                <Descriptions.Item label="字段列表">
                    <div style={{ maxHeight: '200px', overflow: 'auto' }}>
                        {tableData.attrs?.map((attr: any, index: number) => (
                            <Tag key={index} style={{ margin: '2px' }}>
                                {attr.key}
                            </Tag>
                        ))}
                    </div>
                </Descriptions.Item>
            </Descriptions>
        </Modal>
    );
};

export default TableDetailModal; 