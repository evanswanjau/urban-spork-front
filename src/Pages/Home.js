import React from "react";
import ImgMediaCard from "../Components/ImgMediaCard";
import {
    Paper,
    Grid,
    Container,
    makeStyles,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid(props) {
    const classes = useStyles();

    const data = props.posts.map((post) => {
        return (
            <Grid item xs={3} key={post.id}>
                <ImgMediaCard title={post.title} post={post.post} />
            </Grid>
        );
    });

    return (
        <Container className={classes.root} style={{ padding: "5% 2%" }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper elevation={0}>
                        <Typography variant="h2" gutterBottom>
                            Urban Spork
                        </Typography>
                    </Paper>
                </Grid>
                {data}
            </Grid>
        </Container>
    );
}
