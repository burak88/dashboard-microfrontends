import React ,{ useState } from "react"
import styled from "styled-components"

const ContentContainer = styled.div`
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(113, 128, 150, 0.1);
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
`

const ViewToggle = styled.div`
  display: flex;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 8px;
  padding: 4px;
`

const ToggleButton = styled.button`
  background: ${(props) => (props.active ? "#667eea" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#667eea")};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.active ? "#667eea" : "rgba(102, 126, 234, 0.2)")};
  }
`

const ContentList = styled.div`
  flex: 1;
  overflow-y: auto;
  display: ${(props) => (props.view === "list" ? "flex" : "grid")};
  flex-direction: ${(props) => (props.view === "list" ? "column" : "initial")};
  grid-template-columns: ${(props) => (props.view === "grid" ? "repeat(auto-fill, minmax(280px, 1fr))" : "initial")};
  gap: 1rem;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(113, 128, 150, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(102, 126, 234, 0.3);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(102, 126, 234, 0.5);
  }
`

const ContentItem = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(113, 128, 150, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    border-color: rgba(102, 126, 234, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`

const ItemTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
  line-height: 1.4;
`

const ItemCategory = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const ItemDescription = styled.p`
  color: #718096;
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0 0 1rem 0;
`

const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: #a0aec0;
`

const ItemDate = styled.span`
  font-weight: 500;
`

const ItemAuthor = styled.span`
  font-weight: 600;
  color: #667eea;
`

function ContentBar({ content }) {
  const [view, setView] = useState("list")

  return (
    <ContentContainer>
      <Header>
        <Title>Content Feed</Title>
        <ViewToggle>
          <ToggleButton active={view === "list"} onClick={() => setView("list")}>
            List
          </ToggleButton>
          <ToggleButton active={view === "grid"} onClick={() => setView("grid")}>
            Grid
          </ToggleButton>
        </ViewToggle>
      </Header>

      <ContentList view={view}>
        {content.map((item) => (
          <ContentItem key={item.id}>
            <ItemHeader>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemCategory>{item.category}</ItemCategory>
            </ItemHeader>
            <ItemDescription>{item.description}</ItemDescription>
            <ItemFooter>
              <ItemDate>{item.date}</ItemDate>
              <ItemAuthor>by {item.author}</ItemAuthor>
            </ItemFooter>
          </ContentItem>
        ))}
      </ContentList>
    </ContentContainer>
  )
}

export default ContentBar
