import {
  Button,
  Card,
  Form,
  Input,
  Row,
  Space,
  Typography,
  notification,
} from "antd";
import clsx from "clsx";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { isEqual } from "lodash";
import { usePostQuery } from "../../../../hooks/api";

const Index = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { mutate, isLoading } = usePostQuery({
    listKeyId: "get-me",
  });

  const onSubmit = (data) => {
    mutate(
      { url: "activate", attributes: { key: otp } },
      {
        onSuccess: (data) => {
          notification.success({
            message: "You are registered!",
            description: "Please verify check your email",
          });
          navigate("/auth/login");
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
    <div>
      <div className="flex-grow flex justify-center ">
        <Card>
          <Form layout="vertical" form={form} onFinish={onSubmit}>
            <div className="text-center mb-5">
              <h2 className="text-2xl font-bold">Please check your email!</h2>
              <h3 className="text-md font-semibold text-[#333] max-w-sm">
                We have emailed a 6-digit confirmation code to acb@domain,
                please enter the code in below box to verify your email.
              </h3>
            </div>
            <Form.Item
              label={"Confirm code"}
              name={"otp"}
              className="mb-0 flex justify-center"
            >
              <OtpInput
                value={otp}
                onChange={setOtp}
                name="otp"
                numInputs={6}
                inputStyle={clsx(
                  error && otp?.length < 6
                    ? "ant-input-affix-wrapper ant-input-password ant-input-affix-wrapper-status-error css-dev-only-do-not-override-bhqgg0 !w-12 h-12 "
                    : "ant-input css-dev-only-do-not-override-bhqgg0 !w-12 h-12 "
                )}
                className="flex"
                shouldAutoFocus
                renderSeparator={() => <span className="mx-1">-</span>}
                renderInput={(props) => <Input {...props} />}
              />
              <div
                className={clsx(
                  error && otp?.length < 6 ? "visible" : "invisible h-0"
                )}
              >
                <div
                  id="basic_password_help"
                  class="ant-form-item-explain ant-form-item-explain-connected css-dev-only-do-not-override-bhqgg0"
                  role="alert"
                >
                  <div class="ant-form-item-explain-error">
                    Please input your password!
                  </div>
                </div>
                <div></div>
              </div>
            </Form.Item>
            <Form.Item className="mt-8">
              <Button
                size="large"
                type="primary"
                className="bg-[#b937de] w-full mb-2"
                htmlType="submit"
                isLoading={isLoading}
                onClick={() => {
                  if (otp?.length <= 0 || otp?.length !== 6) {
                    return setError(true);
                  }
                  if (otp?.length === 6) {
                    return setError(false);
                  }
                }}
              >
                Verify
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Index;
