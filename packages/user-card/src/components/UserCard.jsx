import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  }
`;

const UserName = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.025em;
`;

const UserEmail = styled.p`
  font-size: 1rem;
  color: #718096;
  margin: 0;
  font-weight: 500;
`;

const UserRole = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem 0;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    transform: translateY(-2px);
  }
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #718096;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;


function UserCard({ user }) {

  return (
    <CardContainer>
      <ProfileSection>
        <Avatar>
          {user.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </Avatar>
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
        <UserRole>{user.role}</UserRole>
      </ProfileSection>

      <StatsSection>
        <StatItem>
          <StatNumber>{user.stats.projects}</StatNumber>
          <StatLabel>Projects</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>{user.stats.tasks}</StatNumber>
          <StatLabel>Tasks</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>{user.stats.completed}</StatNumber>
          <StatLabel>Completed</StatLabel>
        </StatItem>
      </StatsSection>
    </CardContainer>
  );
}

export default UserCard;
