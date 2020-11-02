import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  ListItem,
  ListItemAvatar,
  Divider,
  Avatar,
} from "@material-ui/core";
import { Link, useParams, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function ShowListItem(props) {
  const classes = useStyles();
  let match = useRouteMatch();
  let { broadcasterHandle } = useParams();

  return (
    <div className={classes.root}>
      <Link
        to={`/${props.broadcasterData.handle}/${props.showData.id}`}
        style={{ textDecoration: "none" }}
      >
        <ListItem button alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              style={{ height: "120px", width: "160px" }}
              variant="square"
              alt={props.showData.title}
              src={props.showData.image + "?fit=crop&h=100&w=100&crop=entropy"}
            />
          </ListItemAvatar>
          {props.isSearchItem ? (
            <ListItem alignItems="flex-start">
              <div class="show-text-container">
                <div class="show-title">
                  <Typography
                    variant="h5"
                    style={{ textTransform: "uppercase" }}
                  >
                    {props.showData.name}
                  </Typography>
                  <Divider class="show-title-divider"></Divider>
                  <Typography
                    variant="subtitle1"
                    style={{ fontStyle: "italic" }}
                  >{`Hosted by ${props.showData.host}`}</Typography>
                  <Typography variant="body2">{`Genre: ${props.showData.genre}`}</Typography>
                </div>
                <div class="show-description">
                  <Typography variant="body1">
                    {props.showData.description}
                  </Typography>
                </div>
              </div>
            </ListItem>
          ) : (
            <ListItem alignItems="flex-start">
              <div class="show-text-container">
                <div class="show-title">
                  <Typography
                    variant="h5"
                    style={{ textTransform: "uppercase" }}
                  >
                    {props.showData.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ fontStyle: "italic" }}
                  >{`Hosted by ${props.showData.host}`}</Typography>
                  <Typography variant="body2">{`Genre: ${props.showData.genre}`}</Typography>
                </div>
                <div class="show-description">
                  <Typography variant="body1">
                    {props.showData.description}
                  </Typography>
                </div>
              </div>
            </ListItem>
          )}
        </ListItem>
        <Divider class="show-list-divider" variant="middle" />
      </Link>
    </div>
  );
}
