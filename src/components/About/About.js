import React from "react";
import { Typography, Footer } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";


const WhiteTextTypography = withStyles({
    root: {
      color: "#fff",
    },
    
  })(Typography);


const About = () => {
    return (
        
        <div className="about">

            <WhiteTextTypography variant="h2">
                About<span className="">.</span>
            </WhiteTextTypography>
            <hr></hr>
            <main>
            <WhiteTextTypography variant="h5">
                    This is a Blogging app that lets a user delve
                    into a topic of choice and write a blog post, or read one of
                    the already uploaded Blog posts.
                </WhiteTextTypography>
                <br />
                <WhiteTextTypography variant="h5">
                    In order to write your very own Blog post, you can
                    conveniently login using one of your social accounts or normal with
                    an email Id and a password , and start penning your thoughts!
                </WhiteTextTypography>
                <br />
                <WhiteTextTypography variant="h5">
                    You can edit and update your Blog post at any time, as long as you're
                    logged in. If you ever feel like your post is no longer a
                    valid representation of your thoughts, you can also delete
                    it at any instant of time.
                </WhiteTextTypography>
                <br />

            </main>
            
            <div className='links'>

            </div>
            
        </div>
        
        
    );
    
};

export default About;