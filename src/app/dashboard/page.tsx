"use client"

import React from 'react';
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
  height: 100%;
  overflow-y: auto; /* Allow scrolling */
  scroll-behavior: smooth; /* Smooth scrolling */
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

const Section = styled.section`
  padding: 40px 20px;
  width: 100%;
  max-width: 1200px;
  margin: 30px 0;
  background: #222;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const StatCard = styled.div`
  background: #444;
  padding: 30px;
  width: 30%;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

const StatCardHeading = styled.h3`
  font-size: 1.8em;
  color: #ff3399;
`;

const StatCardValue = styled.p`
  font-size: 2.5em;
  color: #fff;
`;

const Button = styled.button`
  background-color: #ff3399;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #00ccff;
    transform: scale(1.05);
  }
`;

const MealAndExercise = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
`;

const MealExerciseCard = styled.div`
  background: #444;
  padding: 30px;
  width: 45%;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;

const MealExerciseHeading = styled.h3`
  font-size: 1.8em;
  color: #ff3399;
`;

const MealExerciseDescription = styled.p`
  font-size: 1.2em;
  color: #fff;
`;

const Footer = styled.footer`
  background: #333;
  padding: 10px;
  width: 100%;
  text-align: center;
  font-size: 1.2em;
  color: #fff;
  margin-top: auto;
`;

// Dashboard Page

const Dashboard: NextPage = () => {
  return (
    <Container>
      {/* Header */}
      <Header>
        Welcome, Player!
        <p>Your Diabetes360 Dashboard</p>
      </Header>

      {/* Stats Section */}
      <Section>
        <h2>Your Health Stats</h2>
        <StatsContainer>
          <StatCard>
            <StatCardHeading>Blood Sugar Level</StatCardHeading>
            <StatCardValue>120 mg/dL</StatCardValue>
            <Button>Track Progress</Button>
          </StatCard>
          <StatCard>
            <StatCardHeading>Todays Steps</StatCardHeading>
            <StatCardValue>3,200 steps</StatCardValue>
            <Button>Log More</Button>
          </StatCard>
          <StatCard>
            <StatCardHeading>Calories Burned</StatCardHeading>
            <StatCardValue>350 kcal</StatCardValue>
            <Button>Track Exercise</Button>
          </StatCard>
        </StatsContainer>
      </Section>

      {/* Meal and Exercise Section */}
      <Section>
        <h2>Meal and Exercise Plans</h2>
        <MealAndExercise>
          <MealExerciseCard>
            <MealExerciseHeading>Meal Plan</MealExerciseHeading>
            <MealExerciseDescription>
              Plan your meals and avoid sugar spikes. Choose your daily meals from a range of low-carb options!
            </MealExerciseDescription>
            <Button>View Meal Plan</Button>
          </MealExerciseCard>
          <MealExerciseCard>
            <MealExerciseHeading>Exercise Plan</MealExerciseHeading>
            <MealExerciseDescription>
              Keep track of your workouts and get custom exercises to stay fit and healthy.
            </MealExerciseDescription>
            <Button>View Exercises</Button>
          </MealExerciseCard>
        </MealAndExercise>
      </Section>

      {/* Footer */}
      <Footer>
        Diabetes360 | Empowering you to live a healthy life
      </Footer>
    </Container>
  );
};

export default Dashboard;