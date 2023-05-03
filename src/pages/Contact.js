import { BsFillTelephoneFill, BsLinkedin, BsGithub } from "react-icons/bs"
import { MdEmail, MdLocationOn } from "react-icons/md"
import {FaBitbucket } from "react-icons/fa"

export default function Contact() {
return (
<>
<h1 className="contactheader">Contact</h1>
<div className="contacticon">
<BsFillTelephoneFill />
<a className="links" href="+27729426787">0729426787</a> 
<MdEmail />
<a className="links" href="mailto:wernervv93@gmail.com">wernervv93@gmail.com</a>
<MdLocationOn />
<a className="links" href="https://goo.gl/maps/EY8ctivBj6mi8Ggo9">Kraaifontein</a>
<BsLinkedin />
<a className="links" href="https://www.linkedin.com/in/werner-van-vuuren-703892116/">LinkedIn Profile</a>
<BsGithub />
<a className="links" href="https://github.com/WernerVV93">GitHub Profile</a>
<FaBitbucket />
<a className="links" href="https://bitbucket.org/account/workspaces/">Bitbucket Profile</a>
</div>
</>
);
}