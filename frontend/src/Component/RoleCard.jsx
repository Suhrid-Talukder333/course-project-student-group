import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Student from "../assets/student.png";
import Teacher from "../assets/teacher.png"
import styled from 'styled-components';

const StyledCardContent = styled(CardContent)`
  text-align: center;
  font-weight: 400;
  font-size: 20px;
`

const StyledCard = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 3px 6px 20px -3px;
  ${(props) => 
    props.selected && `
      width: 150px;
      height: 150px;
      box-shadow: 3px 6px 20px -3px;
    `
  }
`

const RoleTypeContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

`

export default function RoleCard({
  type,
  selected,
  onChange,
}) {
  const [RoleType, selectedRoleType] = React.useState(type);
  const [RoleImage, setRoleImage] = React.useState(Student);

  React.useEffect(() => {
    if(RoleType.role === "student") {
      setRoleImage(Student);
    } else {
      setRoleImage(Teacher);
    }
  },[RoleType.role])
  
  return (
    <StyledCard selected={selected} onClick={() => onChange(RoleType)}>
        <img width="100%" height="100%" src={RoleImage} />
        <RoleTypeContainer>
          <Typography variant='h5'>{RoleType.role.toUpperCase()}</Typography>
        </RoleTypeContainer>
    </StyledCard>
  );
}
