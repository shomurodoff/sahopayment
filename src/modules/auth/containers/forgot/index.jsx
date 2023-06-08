import { Form, Button, Input, Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { get } from "lodash";

const Index = () => {
  const navigate = useNavigate();

  const onSubmit = (value) => {
    navigate(`/auth/new-password/${get(value, "email", "")}`);
  };
  return (
    <div className="flex-grow flex justify-center ">
      <Card className="w-11/12 md:w-1/4">
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          onFinish={onSubmit}
        >
          <div className="text-center mb-5">
            <h2 className="text-2xl font-bold">Forgot Password</h2>
            <h3 className="text-md text-[#333]">
              Enter the email that you used when register to recover your
              password. You will receive 6 digits number
            </h3>
          </div>
          <Form.Item
            label="Email"
            name="email"
            className="mb-8"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              className="bg-[#b937de] w-full mb-2"
              htmlType="submit"
            >
              Send
            </Button>
            <Button
              className="w-full flex items-center justify-center"
              htmlType="button"
              onClick={() => navigate(-1)}
              icon={
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="2"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  ></path>
                </svg>
              }
            >
              Go Back
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Index;
