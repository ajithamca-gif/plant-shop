import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (!form.email || !form.password) {
      toast.error('All fields required!');
      return;
    }

    // localStorage check
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (!savedUser) {
      toast.error('No account found! Please register.');
      return;
    }

    if (savedUser.email !== form.email || savedUser.password !== form.password) {
      toast.error('Invalid email or password!');
      return;
    }

    dispatch(login({ name: savedUser.name, email: savedUser.email }));
    toast.success(`Welcome back, ${savedUser.name}! 🌿`);
    navigate('/');
  };

  return (
    <Container style={{ maxWidth: '400px', marginTop: '60px' }}>
      <h4 className="mb-4 text-center">Login</h4>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
        />
      </Form.Group>

      <Button className="w-100 mt-2" variant="success" onClick={handleLogin}>
        Login
      </Button>
      <Button 
  variant="outline-success" 
  className="mb-3" 
  onClick={() => navigate('/')}
>
  ← Back to Home
</Button>

      <p className="text-center mt-3">
        Don't have an account?{' '}
        <span
          style={{ color: 'green', cursor: 'pointer' }}
          onClick={() => navigate('/register')}
        >
          Register
        </span>
      </p>
    </Container>
  );
}

export default Login;