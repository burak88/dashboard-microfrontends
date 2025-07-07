import React from "react";
import { mockUser, mockContent } from "./data/mockData";
import styled from "styled-components";

const UserCardApp = React.lazy(() => import("userCard/UserCard"));
const ContentBarApp = React.lazy(() => import("contentBar/ContentBar"));

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 4rem 2rem 2rem 2rem;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;

  @media (max-width: 768px) {
    padding: 4rem 1rem 1rem 1rem;
  }
`;

const TopBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  letter-spacing: 0.05em;
`;

const MainLayout = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 2rem;
  height: calc(100vh - 4rem);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const Section = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
`;

const App = () => {
  return (
    <>
      <TopBar>Dashboard Shell</TopBar>
      <AppContainer>
        <MainLayout>
          <Section>
            <UserCardApp user={mockUser} />
          </Section>
          <Section>
            <ContentBarApp content={mockContent} />
          </Section>
        </MainLayout>
      </AppContainer>
    </>
  );
};

export default App;
