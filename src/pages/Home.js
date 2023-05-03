import Werner from '.././img/Werner.jpg'
export default function Home() {

return ( 
<>
    <div className='container1'>
        <h1 className='mainheader'>Welcome to my Resume</h1>
        <img src={Werner} className='Werner' alt="wernerimage" loading="lazy" />
    <div className='Textstyle'>    
       
        <h1 className='header1'>About Myself</h1> 
       
        <p className='para'>
        I'm a Field Service Engineer with over 11 years of experience in Desktop Support. <br /> 
        My responsibilities over the years are to assist with troubleshooting hardware and software issues as well as
        assisting with basic networking troubleshooting.{'\n'}
        Working for national and international companies, 
        I have built up a broad variety of knowledge within the IT space and was able to share the knowledge I have acquired over the years with my peers.{'\n'} <br />
        I`m constantly learning and working on my upskills to better myself and to ensure that have the knwoledge of new and changing technologies.{'\n'} <br />
        I`m certified in Microsoft Azure Administrator and AWS Cloud Practitioner and currently working on the AWS Certified Developer certification. <br /> I`v also
        recently started to learn JavaScript and React and want to further my knwoledge and skills in coding as well{'\n'} <br />
        I`m very passionate about technology and equally passionate about running and trail running and just being in the outdoors to have that balanced life.{'\n'} <br />
        I`m always up for a new challenge in my life and to work towards the success of myself as well as my employer.
        </p>
        </div>
    </div>
    </>
);
}

