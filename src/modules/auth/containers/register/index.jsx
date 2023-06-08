import { Form, Button, Input, Card, notification } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePostQuery } from "../../../../hooks/api";

const Index = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = usePostQuery({
    listKeyId: "get-me",
  });

  const onSubmit = (data) => {
    mutate(
      { url: "register", attributes: { ...data } },
      {
        onSuccess: (data) => {
          notification.success({
            message: "You are registered!",
            description: "Please verify check your email",
          });
          navigate("/auth/verify");
        },
        onError: (data) => {
          notification.error({
            message: "Server Error",
            description: "Something went wrong",
          });
        },
      }
    );
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
            <h2 className="text-2xl font-bold">Register to SahoPay</h2>
            <h3 className="text-lg font-semibold text-[#333]">
              Already have an account?{" "}
              <Link to={"/auth/login"} className="text-[#b937de]">
                Sign In
              </Link>
            </h3>
          </div>
          <Form.Item
            label="Email"
            className="mb-2"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            className="mb-2"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            className="mb-2"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item className="mt-8">
            <Button
              type="primary"
              className="bg-[#b937de] w-full mb-2"
              htmlType="submit"
              isLoading={isLoading}
            >
              Register
            </Button>
            <Button
              className="w-full flex items-center justify-center"
              htmlType="button"
              onClick={() => navigate(-1)}
              isLoading={isLoading}
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
