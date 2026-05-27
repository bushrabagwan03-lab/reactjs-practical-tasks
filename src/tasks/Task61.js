import styled from 'styled-components';

const Container = styled.div`

  display: flex;

  justify-content: center;

  align-items: center;

  height: 100vh;

  background-color: #f0f0f0;
`;

const Card = styled.div`

  width: 350px;

  padding: 20px;

  border-radius: 10px;

  background-color: white;

  text-align: center;

  box-shadow: 0 0 10px gray;
`;

const Title = styled.h1`

  color: blue;
`;

const Button = styled.button`

  padding: 10px 20px;

  border: none;

  background-color: black;

  color: white;

  border-radius: 5px;

  cursor: pointer;

  margin-top: 20px;
`;

function Task61() {

  return (

    <Container>

      <Card>

        <Title>Styled Components Example</Title>

        <p>
          CSS written inside React component.
        </p>

        <Button>
          Click Me
        </Button>

      </Card>

    </Container>

  );
}

export default Task61;