import React from 'react'
import './Rpo_models.css'
import { MdOutlineCompareArrows } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { TbUserSearch } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";


const Rpo_models = () => {
  return (
    <>
    
        <div className='rpoModels container'>

            <div className='rpoModelsHeader'>
                <h1>Recruitment Process Outsourcing (RPO) Models</h1>
                <p>Recruitment Process Outsourcing (RPO) is a strategic partnership where an organization transfers all or part of its recruitment processes to an external service provider. RPO providers bring specialized expertise, advanced technology, and industry best practices to enhance the efficiency and effectiveness of the hiring process. Depending on the specific needs and goals of an organization, various RPO models can be employed to optimize recruitment efforts. Below are the primary RPO models:</p>
            </div>

            <div className='rpoModelsContent'>

                <div class="rpoModelsCard">
                    <h1><MdOutlineCompareArrows /></h1>
                    <div class="card-body">
                        <h5 class="card-title">End-to-End RPO</h5>
                        <p class="card-text">In this comprehensive model, the RPO provider manages the entire recruitment process from start to finish. This includes job profiling, sourcing, screening, interviewing, offer management, onboarding, and even offboarding.</p>
                    </div>
                </div>


                <div class="rpoModelsCard">
                    <h1><FiCheckCircle /></h1>
                    <div class="card-body">
                        <h5 class="card-title">Project RPO</h5>
                        <p class="card-text">This model is suitable for organizations with specific, short-term hiring needs, such as ramping up for a new project, product launch, or expansion into new markets. The RPO provider helps manage recruitment for the specific project duration, ensuring the company meets its hiring targets within the set timeline.</p>
                    </div>
                </div>


                <div class="rpoModelsCard">
                    <h1><IoIosPeople /></h1>
                    <div class="card-body">
                        <h5 class="card-title">Selective RPO</h5>
                        <p class="card-text">Also known as "Partial RPO," this model allows companies to outsource specific parts of the recruitment process. For example, a company may choose to outsource sourcing and screening of candidates but handle interviewing and onboarding internally. </p>
                    </div>
                </div>


                <div class="rpoModelsCard">
                    <h1><TbUserSearch /></h1>
                    <div class="card-body">
                        <h5 class="card-title">On-Demand RPO</h5>
                        <p class="card-text">In this flexible and scalable model, RPO services are provided on an as-needed basis. Companies can quickly ramp up or down their recruitment efforts in response to fluctuating hiring demands. This model is cost-effective and provides access to recruitment expertise without a long-term commitment.</p>
                    </div>
                </div>


                <div class="rpoModelsCard">
                    <h1><IoPeopleOutline /></h1>
                    <div class="card-body">
                        <h5 class="card-title">Hybrid RPO</h5>
                        <p class="card-text">A combination of in-house and outsourced recruitment activities, the hybrid model allows companies to retain control over certain aspects of recruitment while leveraging the expertise and resources of an RPO provider for other functions. This model can be tailored to meet the specific strategic needs of the organization.</p>
                    </div>
                </div>

                <div class="rpoModelsCard">
                    <h1><FaThumbsUp /></h1>
                    <div class="card-body">
                        <h5 class="card-title">Consultative RPO</h5>
                        <p class="card-text">In this model, the RPO provider acts more as a consultant, offering strategic advice and support to improve the existing recruitment processes. This can include providing insights on best practices, optimizing recruitment technology, and enhancing employer branding. This model focuses on improving the company's internal capabilities rather than fully taking over the recruitment process.</p>
                    </div>
                </div>

            </div>

            <div className='rpoModelsFooter'>
                <h1>Choosing the Right RPO Model</h1>
                <p>When selecting an RPO model, organizations should consider factors such as company size, hiring volume, specific recruitment challenges, budget, resources, and whether the recruitment needs are long-term or short-term. By aligning the RPO model with these considerations, companies can effectively enhance their recruitment processes and achieve their hiring goals.</p>
            </div>
        
        </div>
    
    </>
  )
}

export default Rpo_models