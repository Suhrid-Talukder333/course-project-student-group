import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import BookIcon from "@mui/icons-material/Book";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dialogue from "./Dialogue";
import randomColor from "randomcolor";
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Banner = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1532975313331-cbaf920cf049?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aWxsdXN0cmF0aW9uJTIwYm9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500");
  border-radius: 8px;
  box-shadow: 0px 7px 24px -3px #d9bd9aad;
`;

const DetailsContainer = styled.div`
  display: flex;
  width: 90%;
  padding: 20px;
  margin: 10px;
  justify-content: space-between;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  word-wrap: break-word;
`;

const CourseInfo = styled.div`
  display: flex;
  max-width: 30%;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: left;
  word-wrap: break-word;
  border-radius: 8px;
  background-color: #cbe9f085;
  box-shadow: 0px 3px 5px -3px #2e2f2fad;
`;

const CourseLabel = styled.div`
  display: flex;
  word-wrap: break-word;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
`;

const Label = styled.span`
  font-weight: 400;
  color: #9a9eab;
  font-size: 20px;
  word-wrap: break-word;
`;

const Info = styled.span`
  font-weight: 400;
  font-size: 20px;
  word-wrap: break-word;
  margin-left: 20px;
  text-align: right;
`;

const AnnouncementsContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Announcements = styled.div`
  display: flex;
  padding: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ResourcesContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Resources = styled.div`
  width: 70%;
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
`;

const AddButtonContainer = styled.div`
  z-index: 1050;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

const StyledAddButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  width: 36px;
  height: 36px;
  padding: 10px;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  background: #d9bd9aad;
  transition: all 0.5s;
  box-shadow: 0px 4px 16px -5px #555555ab;
  &:hover {
    background-color: #0cb1e4ab;
  }
  &:active {
    margin-bottom: -10px;
  }
`;

const CourseDetails = () => {
  const [courses, setCourses] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null);
  const [course, setCourse] = useState({});
  const [expanded, setExpanded] = React.useState(false);
  const [announcements, setAnnouncements] = React.useState([]);
  const [resources, setResources] = React.useState([]);
  const [dialogState, setDialogState] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();

  const handleToggle = (item) => {
    if (item && item === "announcement") {
      setDialogState("announcement");
    } else if (item && item === "resource") {
      setDialogState("resource");
    }
    setOpen(!open);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleAdd = async (item) => {
    handleToggle();
    if (item.link) {
      let resource = { ...item, courseId: id };
      let updatedresources = [...resources];
      updatedresources.push(resource);
      await fetch(`http://localhost:8080/resources/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resource),
      }).then(() => {
        NotificationManager.success('Successfully Added Resources', "Resources");
        setResources(updatedresources);
        const loggedUser = JSON.parse(
          window.localStorage.getItem("loggedUser")
        );
        let updatedUserData = { ...loggedUser };
        updatedUserData.courses = updatedUserData.courses.map((item) => {
          if (item.id.toString() === id) {
            item.resources = updatedresources;
          }
          return item;
        });
        window.localStorage.setItem(
          "loggedUser",
          JSON.stringify(updatedUserData)
        );
      });
    } else {
      let announcement = { ...item, courseId: id };
      let updatedAnnouncements = [...announcements];
      updatedAnnouncements.push(announcement);
      await fetch(`http://localhost:8080/announcements/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(announcement),
      }).then(() => {
        NotificationManager.success('Successfully Added Announcement', "Announcement")
        setAnnouncements(updatedAnnouncements);
        const loggedUser = JSON.parse(
          window.localStorage.getItem("loggedUser")
        );
        let updatedUserData = { ...loggedUser };
        updatedUserData.courses = updatedUserData.courses.map((item) => {
          if (item.id.toString() === id) {
            console.log(item, "item");
            console.log(id, "id");
            item.announcements = updatedAnnouncements;
          }
          return item;
        });
        window.localStorage.setItem(
          "loggedUser",
          JSON.stringify(updatedUserData)
        );
      });
    }
  };

  useEffect(() => {
    const loggedUser = JSON.parse(window.localStorage.getItem("loggedUser"));
    console.log(loggedUser);
    setLoggedUser(loggedUser);
    setCourses(loggedUser.courses);
  }, []);

  useEffect(() => {
    courses.forEach((item) => {
      if (item.id.toString() === id) {
        setCourse(item);
        console.log(item);
        setAnnouncements(item.announcements);
        setResources(item.resources);
      }
    });
  }, [courses, id, loggedUser]);

  useEffect(() => {}, [announcements, resources, loggedUser]);

  return (
    <>
      <Banner />
      <DetailsContainer>
        <DescriptionContainer>
          <Typography
            style={{ fontWeight: "bold", color: "#9a9eab" }}
            variant="h4"
          >
            {course.name}
          </Typography>
          <Typography style={{ padding: "10px" }} variant="h6">
            {course.description} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </DescriptionContainer>
        <CourseInfo>
          <CourseLabel>
            <Label>Course Name: </Label>
            <Info>{course.name}</Info>
          </CourseLabel>
          <CourseLabel>
            <Label>Course Teacher: </Label>
            <Info>{course.teacher}</Info>
          </CourseLabel>
          <CourseLabel>
            <Label>Course Code: </Label>
            <Info>{course.code}</Info>
          </CourseLabel>
          <CourseLabel>
            <Label>Course Time: </Label>
            <Info>{course.time}</Info>
          </CourseLabel>
          <CourseLabel>
            <Label>Course Credit: </Label>
            <Info>{course.credit}</Info>
          </CourseLabel>
          {course.state && (
            <CourseLabel>
              <Label>Course state: </Label>
              <Info>{course.state}</Info>
            </CourseLabel>
          )}
        </CourseInfo>
      </DetailsContainer>
      <AnnouncementsContainer>
        <Typography variant="h4">Announcements</Typography>
        <Announcements>
          {announcements && announcements.length === 0 && (
            <Typography variant="h5"> No Announcements!!!</Typography>
          )}
          {announcements && announcements.length > 0 && (
            <Timeline position="right">
              {announcements &&
                announcements.map((item) => {
                  return (
                    <TimelineItem key={item.id}>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                      >
                        {item.time}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot sx={{ bgcolor: randomColor() }}>
                          <BookIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          {item.title}
                        </Typography>
                        <Typography>{item.detail}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
            </Timeline>
          )}
          {loggedUser && loggedUser.role === "teacher" && (
            <AddButtonContainer onClick={() => handleToggle("announcement")}>
              <StyledAddButton>+</StyledAddButton>
            </AddButtonContainer>
          )}
        </Announcements>
      </AnnouncementsContainer>
      <ResourcesContainer>
        <Typography variant="h4">Resources</Typography>
        <Resources>
          {resources && resources.length === 0 && (
            <Typography variant="h5"> No Resources!!!</Typography>
          )}
          {resources &&
            resources.length > 0 &&
            resources.map((item, index) => (
              <Accordion
                key={item.id}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    {item.detail}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <a href={`${item.link}`} target="_blank" rel="noreferrer">
                    {item.link}
                  </a>
                </AccordionDetails>
              </Accordion>
            ))}
          {loggedUser && loggedUser.role === "teacher" && (
            <AddButtonContainer onClick={() => handleToggle("resource")}>
              <StyledAddButton>+</StyledAddButton>
            </AddButtonContainer>
          )}
        </Resources>
      </ResourcesContainer>
      {open && (
        <Dialogue
          onToggle={handleToggle}
          state={dialogState}
          onAdd={handleAdd}
        />
      )}
    </>
  );
};

export default CourseDetails;
