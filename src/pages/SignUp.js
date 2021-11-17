import { Component, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../componenets/Button.style";
import Card from "../componenets/Card.style";
import CardContent from "../componenets/CardContent.style";
import CardHeader from "../componenets/CardHeader.style";
import CenteredContainer from "../componenets/CenteredContainer.style";
import Input from "../componenets/Input.style";
import Subtitle from "../componenets/Subtitle.style";
import Link from "../componenets/Link.style";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signUp = (user) => {
    fetch("http://localhost:4001/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: user.email,
          password: user.password,
          name: user.name,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem("token", result.token);
          localStorage.setItem("user", JSON.stringify(result.user));
          navigate("/");
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp({ email, password, name });
  };

  return (
    <CenteredContainer>
      <Card>
        <CardHeader title="Sign Up Form" />
        <CardContent>
          <form id="signup-form" onSubmit={handleSubmit}>
            <Input
              required
              name="email"
              placeholder="Email*"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              required
              name="password"
              placeholder="Password*"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Input
              required
              name="name"
              placeholder="Name*"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Button type="submit" form="signup-form" value="register">
              Register
            </Button>
            <Subtitle>
              Already have an account? <Link to="/signin">Sign In</Link>
            </Subtitle>
          </form>
        </CardContent>
      </Card>
    </CenteredContainer>
  );
}
