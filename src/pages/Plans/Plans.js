import React, { useEffect, useState } from 'react';
import { Layout, Typography, List } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const Plans = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlans = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/plans');
                const data = await response.json();
                setPlans(data);
            } catch (error) {
                console.error('Error fetching plans:', error);
            }
            setLoading(false);
        };

        fetchPlans();
    }, []);

    return (
        <Layout>
            <Content style={{ padding: '50px', maxWidth: '1200px', margin: '0 auto' }}>
                <Title level={2}>Your Travel Plans</Title>
                <List
                    loading={loading}
                    itemLayout="horizontal"
                    dataSource={plans}
                    renderItem={plan => (
                        <List.Item>
                            <List.Item.Meta
                                title={plan.title}
                                description={`Destination: ${plan.destination}`}
                            />
                        </List.Item>
                    )}
                />
            </Content>
        </Layout>
    );
};

export default Plans;
