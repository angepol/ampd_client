import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button.style";
import Card from "../components/Card.style";
import CardContent from "../components/CardContent.style";
import CardHeader from "../components/CardHeader.style";
import CenteredContainer from "../components/CenteredContainer.style";
import Input from "../components/Input.style";
import Subtitle from "../components/Subtitle.style";
import Link from "../components/Link.style";
import { SERVER_URL } from "..";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signUp = (user) => {
    fetch(`${SERVER_URL}/users`, {
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
