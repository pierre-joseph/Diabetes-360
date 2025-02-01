"use client"

import React, { useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  color: #fff;
  font-family: 'Arial', sans-serif;
  padding: 40px;
`;

const Header = styled.header`
  background: linear-gradient(135deg, #ff66cc, #00ccff);
  width: 100%;
  padding: 20px;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  border-bottom: 5px solid #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background: #222;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  margin-top: 20px;
`;

const FormTitle = styled.h2`
  font-size: 2em;
  color: #ff3399;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  background: #333;
  border: 1px solid #444;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2em;

  &:focus {
    border-color: #ff3399;
    outline: none;
  }
`;

const SelectField = styled.select`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  background: #333;
  border: 1px solid #444;
  border-radius: 5px;
  color: #fff;
  font-size: 1.2em;

  &:focus {
    border-color: #ff3399;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #ff3399;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1.5em;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #00ccff;
    transform: scale(1.05);
  }
`;

const ProfilePage: NextPage = () => {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    bloodSugar: '',
    weight: '',
    exercise: ''
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You could submit the data to a backend or process it here
    console.log('Form submitted:', formData);
  };

  return (
    <Container>
      <Header>
        Patient Profile
      </Header>

      <FormContainer>
        <FormTitle>Personal Information</FormTitle>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
          />
          <InputField
            type="number"
            name="bloodSugar"
            placeholder="Enter your latest blood sugar level (mg/dL)"
            value={formData.bloodSugar}
            onChange={handleChange}
          />
          <InputField
            type="number"
            name="weight"
            placeholder="Enter your weight (kg)"
            value={formData.weight}
            onChange={handleChange}
          />
          <SelectField
            name="exercise"
            value={formData.exercise}
            onChange={handleChange}
          >
            <option value="">Select your daily exercise</option>
            <option value="none">None</option>
            <option value="light">Light (Walking, Stretching)</option>
            <option value="moderate">Moderate (Jogging, Cycling)</option>
            <option value="intense">Intense (Running, High-Intensity Training)</option>
          </SelectField>
          <Button type="submit">Save Profile</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default ProfilePage;