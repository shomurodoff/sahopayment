import {
  Form,
  Button,
  Checkbox,
  Input,
  Card,
  Row,
  Col,
  notification,
} from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePostQuery } from "../../../../hooks/api";
import { useSettingsStore, useStore } from "../../../../store";
import { get } from "lodash";

const Index = () => {
  const navigate = useNavigate();
  const setAuth = useStore((state) => get(state, "setAuth", () => {}));

  const setToken = useSettingsStore((state) =>
    get(state, "setToken", () => {})
  );

  const { mutate, isLoading } = usePostQuery({
    listKeyId: "get-me",
  });

  const onSubmit = (data) => {
    mutate(
      { url: "auth-mail", attributes: { ...data } },
      {
        onSuccess: (data) => {
          setAuth(true);
          setToken(get(data, "data.id_token"));
          notification.success({
            message: "You are welcome!",
            description: "Successfully login",
          });
        },
        onError: (data) => {
          notification.error("You password or username is wrong");
        },
      }
    );
  };
  return (
    <div className="flex-grow flex justify-center ">
      <Card className="w-11/12 md:w-1/4 shadow-2xl">
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
            <h2 className="text-2xl font-bold">Sign to SahoPay</h2>
            <h3 className="text-lg font-semibold text-[#333]">
              New Here?{" "}
              <Link to={"/auth"} className="text-[#b937de]">
                Create an Account
              </Link>
            </h3>
          </div>
          <Form.Item
            label="Email"
            name="username"
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
          <Form.Item name="rememberMe" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              disabled={isLoading}
              loading={isLoading}
              type="primary"
              className="bg-[#b937de] w-full mb-2"
              htmlType="submit"
            >
              Login
            </Button>
            <Button
              disabled={isLoading}
              loading={isLoading}
              className="w-full flex items-center justify-center"
              htmlType="button"
              onClick={() => navigate("/")}
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
        <Row justify={"center"}>
          <Col>
            <Link to={"/auth/reset-password"} className="text-[#333]">
              Forgot Password ?
            </Link>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Index;
