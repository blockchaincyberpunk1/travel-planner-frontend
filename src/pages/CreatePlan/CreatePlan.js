import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Typography, Form, Input, DatePicker, Button } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const CreatePlan = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            const response = await fetch('/api/plans', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                navigate('/plans');
            } else {
                console.error('Failed to create plan.');
            }
        } catch (error) {
            console.error('Error creating plan:', error);
        }
    };

    return (
        <Layout>
            <Content style={{ padding: '50px', maxWidth: '1200px', margin: '0 auto' }}>
                <Title level={2}>Create a New Travel Plan</Title>
                <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="destination" label="Destination" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="startDate" label="Start Date" rules={[{ required: true }]}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="endDate" label="End Date" rules={[{ required: true }]}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="description" label="Description">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Create Plan
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    );
};

export default CreatePlan;
