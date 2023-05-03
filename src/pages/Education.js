export default function Education() {
const skills=[
    {
        name:'Windows 7', percentage:95
    },
    {
        name:'Windows 10', percentage:95
    },
    {
        name:'Office 365', percentage:70
    },
    {
        name:'React JS', percentage:5
    },
    {
        name:'MS Azure', percentage:30
    },
    {
        name:'AWS', percentage:30
    },
]

    return (
        <div className='edu-cert'>
        <div className='column'>
            <h2 className="edu1">Education</h2>
            <ul className="edu-ul">
            <li className='school1'>IT Technical Support NQF 4 <br />
            CTU Training Solutions Claremont <br />
            2019-2019</li> <br />
            <li className="school1">National Senior Certificate <br />
            Langenhoven High Riversdale <br />
            2007-2011</li>
            </ul>
        </div>
        
        <div className='column'>
            <h2 className="certheader">Certification</h2>
            <ul className="cert-ul">
            <li className="cert2">CompTIA A+ </li> <br />
            <li className="cert2">CompTIA N+</li> <br/>    
            <li className="cert2">Microsoft 365 Certified: Modern Desktop<br /> Administrator Associate<br />
            Dec 2019-Dec 2023</li> <br />
            <li className='cert2'>Microsoft Certified: Azure administration Associate <br /> 
            Aug 2022-Aug 2023</li> <br />
            <li className="cert2">AWS Certified Cloud Practitioner  <br />
            Sept 2022-Sept 2025</li>
            </ul>
        </div>

    
        <div className='column'>
            <h2 className="skillsheader">Skills</h2>
        <div className='skillscon'> {skills.map((val) => (
            <>
            <p className="skillsheading">{val.name}</p>

            <div className='skills' style={{width:val.percentage + "%"}}>{val.percentage}</div>
                    
            </>
        ))}</div>
       
</div>
</div>
)
}

