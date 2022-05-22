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

const StyledCard = styled(Card)`
  ${(props) => 
    props.selected && "border: 2px solid red"
  }
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
  },[])
  
  return (
    <StyledCard sx={{ maxWidth: 345 }} selected={selected} onClick={() => onChange(RoleType)}>
      <CardActionArea>
        <CardMedia
          sx={{
            borderRadius: `50%`,
          }}
          component="img"
          height="140"
          image={RoleImage}
          alt="student"
        />
        <StyledCardContent>
            {RoleType.title}
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
}
