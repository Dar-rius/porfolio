import './about.css'
import AOS from 'aos'

const About =()=>{
    AOS.init({
        duration : 1700
      });
    return(
            <div className="about" id="/about" data-aos="fade-down">
                <h2>/ About</h2>
                <div className="info">
                    <p className="para1">
                    I am currently studying computer management at UCAO but I have good knowledge
                    in development in the design of website, web and mobile application. <br/><br/>
                    I use many technologies: <br/><br/>

                    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'start'}}>
                        <div style={{marginRight:'10%'}}>
                            {">"}<span className="croix"> Python </span><br/>
                            {">"}<span className="croix"> Java </span>  <br/>
                            {">"}<span className="croix"> JavaScript </span>  <br/>
                            {">"}<span className="croix"> HTML5/CSS3 </span>  <br/>
                            {">"}<span className="croix"> Solidity </span>  <br/>
                            {">"}<span className="croix"> Golang </span>  <br/> <br/>
                        </div>

                        <div>
                            {">"}<span className="croix"> React Js </span> <br/>
                            {">"}<span className="croix"> React Native </span>  <br/>
                            {">"}<span className="croix"> Node Js </span>  <br/>
                            {">"}<span className="croix"> Next Js </span>  <br/>
                            {">"}<span className="croix"> Django </span>  <br/>
                            {">"}<span className="croix"> Flask </span>  <br/><br/>
                        </div>
                    </div>
                    </p>
                </div>
            </div>

    )
}

export default About