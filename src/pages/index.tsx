import React, {SyntheticEvent}                                    from "react";
import {Button, Grid, Input, Paper, TextField, Theme, Typography} from "@material-ui/core";
import styled                                                     from '@emotion/styled';
import AccountCircle                                              from '@material-ui/icons/AccountCircle'
import Link                 from "../components/Link";
import {signIn, useSession} from "next-auth/client";

const Days: string[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const DayOfWeekGrid = styled(Grid)`
  flex: 1 0 0;
`

const Day = styled(Paper)`
`;

const DayHeader = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  padding: 0 2rem;
  text-transform: uppercase;
`;

const Header = styled.header`
  border-bottom: solid 1px black;
`;

const SectionWrapper = styled.section`
  padding: 1rem 2rem;
`

const ApplicationTitle = styled(Typography)`
  flex: 1 0 0;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({theme}: { theme: Theme }) => theme.palette.secondary.light}
`

function Login(){
  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    signIn();
  };

  const [session, loading] = useSession();
  
  if(session){
    return <>
      Hi {session.user.name}
    </>
  }

  return (
  <Link
    href="/api/auth/login"
    onClick={ (e) => handleLogin(e)}
  >
    <Button
      style={{
        marginRight: '2rem'
      }}
      startIcon={<AccountCircle/>}
      size='medium'
      color='primary'
      variant="contained"
    >Log In</Button>
  </Link>
  )
}

function Index() {
  return (
    <>
      <Nav>
        <ApplicationTitle gutterBottom variant="h1">thisweek</ApplicationTitle>
        <Login></Login>
      </Nav>
      <Grid container spacing={3}>
        {Days.map((day, i) => (
          <DayOfWeekGrid key={i}>
            <Day elevation={1} square={true}>
              <Header>
                <DayHeader>{day}</DayHeader>
              </Header>
              <SectionWrapper>
                <TextField label='add task' fullWidth/>
              </SectionWrapper>
            </Day>
          </DayOfWeekGrid>
        ))}
      </Grid>
    </>
  )
}

export default Index;
