import React from 'react'
import Card from './Card'
const Service = () => {
  let service=[
    {img:"PiBracketsCurlyBold",
    skill:"Web Development",
    desc:"Use web and mobile development best practices to build stylish and innovative user interfaces."},
    {img:"ImMobile2",
    skill:"Responsive Design",
    desc:"Create user interfaces that are responsive to fit every device to keep the user experience consistently great."},
    {img:"LuMonitor",
    skill:"Web Design",
    desc:"Designing from start to finish. From basic mockup designs all the way through to prototyping and then development."}
  ]
  return (
    <section id="service" className="services-mf py-20 route">
    <div className="max-md:flex-col w-[71%]  mx-auto flex flex-row gap-6">
      {
        service.map((card,index)=>(
          <Card key={index} icon={card.img} skill={card.skill} desc={card.desc}/>
        ))
      }
    </div>
  </section>
  )
}

export default Service;
