import React from 'react';
// import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className=" footer-layout">
            <div className="footer-line"><hr></hr></div>
            <div className="rows ">
            <div className=" footer-left">
            <div>
                <img src='images/footer/icons.svg' alt="home background"></img>
            
            <p>
                Home
                About
                Projects
                Status
                GameList
                Contact 
            </p>
            </div>
            <div>All rights reserved Jereen Leblanc</div>

            </div>
            <div  className="footer-center">

                Thanks for visiting 
            </div>
            <div className="footer-right">
                <h1>Subscribe to my newsletter</h1>
                <p>Curious about my latest developments and updates?</p>
                <p>Sign up to my newsletter here.</p>
                <div> <input type="text"></input>
                <img  src='images/footer/Newsletter Icon.svg' alt="home background"></img>
                </div>
                {/* <View style={styles.searchSection}>
                    <image src={require('images/Arrow right/icons.svg')}></image>
                    <TextInput
                        
                    />
                    
                </View> */}
            </div>
        </div>
    </div>
    )
}

export default Footer;