
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 200,
        width: 400,
       
        
    }

}));

const List = ({ blogs, title }) => {
    const classes = useStyles();
    return (
        <div className="listpreview">
        <div className={classes.root}>

            <h1>{title}</h1>
            <Grid container justify="center" spacing={5}>
                {
                    blogs.map((blog) => (
                        <Grid key={blog.id} item className="grid">
                            <Paper className={classes.paper} id="grid">
                                <Typography>
                                    <Link to={`/blogs/${blog.id}`}>
                                    <h2>{blog.title}</h2>
                                    <p>written by {blog.author}</p>
                                    </Link>
                                </Typography>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>


        </div>
        </div>
    );
}

export default List;