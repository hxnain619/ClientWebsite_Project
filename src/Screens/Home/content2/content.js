import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';


import image from '../../../assets/images/n1.png';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '10px',
        padding: '10px',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'black'
    },
    gridList: {
        height: 'auto',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

// The example data is structured as follows:

const tileData = [
    {
        img: image,
        title: 'Image',
        author: 'author',
    }, {
        img: image,
        title: 'Image',
        author: 'author',
    }, {
        img: image,
        title: 'Image',
        author: 'author',
    }, {
        img: image,
        title: 'Image',
        author: 'author',
    }];


function Content2(props) {
    const { classes } = props;

    return (
        <div className='container' style={{ background: 'black', marginTop: '20px' }}>
            <span style={{ display: 'inline' }}>
                <h3 style={{ color: 'orange' }}> Content 1  </h3>
                <h5 style={{ color: 'orange', textAlign: 'right' }} >More &gt; </h5>
            </span>
            <div className={classes.root}>
                <img src={require('../../../assets/images/logo.png')} alt='' style={{ width: '30%' }} />
                <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">December</ListSubheader>
                    </GridListTile>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>by: {tile.author}</span>}
                                actionIcon={
                                    <IconButton className={classes.icon}>
                                        {/* <InfoIcon /> */}
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
    );
}

Content2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content2);