import MainLayout from 'src/layouts/MainLayout'
import styled from 'styled-components'

const Card = styled.div`
  height: 22em;
  background: #ffffff;
  width: 100%;
  padding: 1.5em;
  box-shadow: 0 1em 2em rgba(68, 68, 68, 0.25);
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
`
const CardContainer = styled.div`
  padding: 2em 0 9em;
`

const CardTitle = styled.h1`
  font-family: 'DM Serif Display', serif;
  text-transform: uppercase;
  font-size: 2em;
  margin: 0 0 0.75em;
`

const CardSubTitle = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-size: 1.5em;
  margin: 0;
`

const CardNavigation = styled.div`
  align-self: flex-end;
`
const CardButtons = styled.div`
  position: absolute;
  bottom: -2em;
`

const CardButton = styled.button`
  width: 6em;
  height: 6em;
  border: none;
  font-size: 1em;
  background: #ffffff;
  margin-right: 1.5em;
  cursor: pointer;
  box-shadow: 0 1em 2em rgba(68, 68, 68, 0.25);
`

const Button = styled.button`
  font-family: 'DM Serif Display', serif;
  font-size: 1em;
  padding: 0.5em 1em;
  border: none;
  cursor: pointer;
  background: ${(props) => (props.secondary ? 'transparent' : '#bfc2f2')};
  transition: 0.4s ease;

  &:hover {
    box-shadow: 0 1em 2em rgba(68, 68, 68, 0.25);
  }
`

const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ReviewHeader = styled.h3`
  font-family: 'DM Serif Display', serif;
  text-transform: uppercase;
  margin: 0 0 1em;
`

const ReviewPage = () => {
  return (
    <MainLayout>
      <CardContainer>
        <Card>
          <div>
            <CardSubTitle>Cloud</CardSubTitle>
            <CardTitle>Container</CardTitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lacinia felis ut felis gravida egestas. Pellentesque sed mauris
              mi. Suspendisse in libero non arcu auctor congue. Aenean viverra
              viverra dignissim. Ut sed hendrerit sapien. Maecenas eleifend ex
              nisi, eget imperdiet nisl pharetra quis.
            </p>
          </div>
          <CardNavigation>
            <Button secondary>Previous</Button>
            <Button>Next</Button>
          </CardNavigation>
          <CardButtons>
            <CardButton>1</CardButton>
            <CardButton>1</CardButton>
            <CardButton>1</CardButton>
          </CardButtons>
        </Card>
      </CardContainer>
      <ReviewContainer>
        <div>
          <ReviewHeader>Notes</ReviewHeader>
          <p>Find me in ./web/src/pages/ReviewPage/ReviewPage.js</p>
        </div>
        <div>
          <ReviewHeader>Actions</ReviewHeader>
          <p>Find me in ./web/src/pages/ReviewPage/ReviewPage.js</p>
        </div>
      </ReviewContainer>
    </MainLayout>
  )
}

export default ReviewPage
