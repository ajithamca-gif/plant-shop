import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { register } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (!form.name || !form.email || !form.password) {
      toast.error('All fields required!');
      return;
    }

    // localStorage la save
    localStorage.setItem('user', JSON.stringify(form));

    dispatch(register({ name: form.name, email: form.email }));
    toast.success(`Welcome, ${form.name}! 🌿`);
    navigate('/');
  };

  return (
    <Container style={{ maxWidth: '400px', marginTop: '60px' }}>
      <h4 className="mb-4 text-center">Create Account</h4>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        />
      </Form.Group>

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

      <Button className="w-100 mt-2" variant="success" onClick={handleRegister}>
        Register
      </Button>

      <p className="text-center mt-3">
        Already have an account?{' '}
        <span
          style={{ color: 'green', cursor: 'pointer' }}
          onClick={() => navigate('/login')}
        >
          Login
        </span>
      </p>
      <Button 
  variant="outline-success" 
  className="mb-3" 
  onClick={() => navigate('/')}
>
  ← Back to Home
</Button>
    </Container>
  );
}

export default Register;