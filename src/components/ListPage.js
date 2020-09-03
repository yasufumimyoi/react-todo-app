import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../css/listpage.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ListPage = (props) => {
  const classes = useStyles();
  return (
    <div>
      {props.title && (
        <div className="list">
          <Card variant="outlined" className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {props.date}
              </Typography>
              <Typography variant="body2" component="p">
                Note: {props.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={props.handleRemove}
              >
                Remove
              </Button>
            </CardActions>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ListPage;
