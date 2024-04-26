import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Spin, Alert } from "antd";

const { Title, Text } = Typography;

const PlanDetail = () => {
  const { planId } = useParams();
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/plans/${planId}`);
        if (!response.ok) {
          throw new Error("Plan data could not be fetched.");
        }
        const data = await response.json();
        setPlan(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPlan();
  }, [planId]);

  if (loading) return <Spin size="large" />;
  if (error)
    return <Alert message="Error" description={error} type="error" showIcon />;

  return (
    <div style={{ padding: "20px" }}>
      {plan ? (
        <>
          <Title level={2}>{plan.title}</Title>
          <Text strong>Destination:</Text> <Text>{plan.destination}</Text>
          <br />
          <Text strong>Start Date:</Text> <Text>{plan.startDate}</Text>
          <br />
          <Text strong>End Date:</Text> <Text>{plan.endDate}</Text>
          <br />
          <Text strong>Description:</Text> <Text>{plan.description}</Text>
        </>
      ) : (
        <Text>No plan details available.</Text>
      )}
    </div>
  );
};

export default PlanDetail;
