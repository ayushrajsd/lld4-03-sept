import React from "react";
import { Button, Input, Form } from "antd";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <main className="App-header">
        <h1>Register to Book My Show</h1>
        <section className="mw-500 text-center px-3">
          <Form layout="vertical">
            <Form.Item
              label="Name"
              htmlFor="name"
              name="name"
              className="d-block"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter you name"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              htmlFor="email"
              name="email"
              className="d-block"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter you email"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              htmlFor="password"
              name="password"
              className="d-block"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter you Password"
              />
            </Form.Item>
            <Form.Item className="d-block">
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <div>
            <p>
              {" "}
              Already a User? <Link to="/login">Login Here</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;
