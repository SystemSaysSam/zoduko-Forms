import './navbar-primary.css'
export function Navbar(){
    return(
        <>
        <div className="navbar-primary">
      <div className="logo"><img src='/ZF2.png' /></div>
      <div className="about">About</div>
      <div className="about">Contact Us</div>
      <div className="login"><button className="login-btn">Login</button></div>
      <div className="SignUp"><button className="Signup-btn">Signup</button></div>
    </div>
    <div className="cardwrapper">
         <div className="firsthead">
        <div className="card"><img src='/card-homepage1.png' /></div>
        <div className="card-detail">
            <div className="card-heading">Now No Worries For Returns & Replacement</div>
            <div className="card-content">
                Manage returns and replacements without spreadsheets, manual chats,
                or operational chaos. Let customers submit requests through a simple portal
                while you handle everything from one dashboard.
            </div>
        </div>
    </div>
    </div>
    <div className="cardwrapper">
         <div className="firsthead">
        <div className="card-detail">
            <div className="card-heading">Automated Data Exports</div>
            <div className="card-content">
                Eliminate manual spreadsheets with automated exports designed
                for ecommerce workflows. Download clean, structured return data
                ready for bulk processing and logistics management.
            </div>
        </div>
        <div className="card"><img src='/card-homepage2.png' /></div>
    </div>
    </div>
    <div className="video-heading">Learn How It Works</div>
    <div className="video-player"><video controls><source src="/Howtovideo.mp4" type="video/mp4" /></video> </div>
        </>
    )
}