/**
 * The Profile component in this React application allows users to edit and update their profile
 * information, including bio, age, occupation, papers published, expertise, contact details, about
 * section, projects, and image.
 * @returns The Profile component is being returned. The component includes a form for editing and
 * updating user profile information. The form allows users to input details such as bio, age,
 * occupation, paper published, expertise, gmail, linkedin, location, about, project, and image. Users
 * can also upload an image for their profile picture. The component also displays the user's profile
 * information if available, including bio,
 */
// import React from 'react'
// import { useState } from 'react';
// import { updateProfile,getProfile } from './ProfileApi';
// import { ToastContainer,toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import Loading from '../utils/Loading';
// import { useEffect } from 'react';

// export default function Profile() {
//   const [edit,setEdit] = useState(false);
//   const [data,setData] = useState(null)
//   // const [loading,setLoading] = useState(false)

//   //edit boolean function
//   const change = (e)=>{ 
//     e.preventDefault()
//     setEdit((prevForm)=>!prevForm)
//   }


// const  [form, setForm] = useState({bio:'',age:0,occupation:'',paperPublished:0,expertise:'',gmail:'',linkedin:'',location:'',image:'/profile_pic.png',about:'',project:'',imagePreview:''});

// let name,value
// const handleInputs=(e)=>{ 

//   name = e.target.name;
//   value = e.target.value;
//   //we spread the operator because if not and just directly change we only get that property and value
//   setForm({...form,[name]:value})
//   }

  
//   const handleFileChange = (e) => {

//     const file = e.target.files[0];
//     setForm((prevForm) => ({ ...prevForm, image: file }));
//     if (file) {
//       const reader = new FileReader();
  
//       reader.onloadend = () => {
//          //to handle async nature(safety)i didnt write setForm({...form,avatar:file})
//         setForm((prevForm) => ({ ...prevForm, image:file, imagePreview: reader.result }));
//       };
  
//       //to add the file/image in avatar and avatarpreview
//       reader.readAsDataURL(file);
//     }
//   };


//   //register user
// const changeProfile = async(e) => {
//   // setLoading(true)
//   try {
//     e.preventDefault();

//     const {bio,age,occupation,paperPublished,expertise,gmail,linkedin,location,about,project,image}=form;  
    
   
  
  
//     const myForm = new FormData();

//     myForm.set("bio", bio);
//     myForm.set("age", age);
//     myForm.set("occupation", occupation);
//     myForm.set("paperPublished", paperPublished);
//     myForm.set("expertise", expertise);
//     myForm.set("gmail", gmail);
//     myForm.set("linkedin",linkedin);
//     myForm.set("location",location);
//     myForm.set("about",about);
//     myForm.set("project",project);
//     myForm.set("image",image);

  
//     //to console myForm
//     // for (var key of myForm.entries()) {
//     //   console.log(key[0] + ', ' + key[1])
//     // }

//     const response = await updateProfile(myForm)
//    const result = await  response.data.profile;
//   setData(result)
//   setEdit((prevForm)=>!prevForm)
//   } 
//   catch (error) {
//     console.error('Error updating profile:', error);
//   }
//   finally{ 
//     // setLoading(false);
//   }
 
    
// };

// async function getProfileData(){ 

//   const response = await getProfile();
//   const userData = response.data.user[0]
//   return userData
// }


// useEffect(()=>{ 
//   getProfileData();

// },[])
//   console.log(data);
//   return (
//     <div>
//     <div>
//    {edit?

//    <form method="post" encType="multipart/form-data" onSubmit={changeProfile}>
//       <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//         <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
//           <div className="self-stretch flex grow flex-col justify-center items-stretch w-full max-md:max-w-full">
//             <div className="bg-neutral-900 flex flex-col justify-center items-stretch max-md:max-w-full">
//               <div className="bg-white flex flex-col justify-center items-stretch max-md:max-w-full">
//                 <span className="bg-slate-200 flex flex-col px-10 py-12 max-md:max-w-full max-md:px-5">
//                 <input className='mb-2' id="dropzone-file"  onChange={handleFileChange}  name = 'image' type="file" accept="image" />
//                <input  type='text' value={form.bio} name='bio' onChange={handleInputs} placeholder='Enter bio'/>
//                   <span className="justify-between items-stretch self-center flex w-[400px] max-w-full gap-5 mt-16 max-md:mt-10">
//                     <span className="items-center flex justify-between gap-2.5">
//                       <img
//                         loading="lazy"
//                         alt=""
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/6060cbf5e71feae77026f5df300558869e3f6c3f3e4ffbad4ff1f96f16849691?"
//                         className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
//                       />
//                       <div className="text-gray-600 text-2xl leading-8 self-stretch">
//                         Age
//                       </div>
//                     </span>
//                    <input type='number' value={form.age} name='age' onChange={handleInputs} placeholder='Enter age'/>
                    
//                   </span>
//                   <span className="justify-between items-stretch self-center flex w-[400px] max-w-full gap-5 mt-6">
//                     <span className="items-center flex justify-between gap-2.5">
//                       <img
//                         loading="lazy"
//                         alt=""
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/60d9abeb74446fc6d086d97442932761a4c5464cb7f20f4117ed2bb3cb43580e?"
//                         className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
//                       />
//                       <div className="text-gray-600 text-2xl leading-8 self-stretch grow whitespace-nowrap">
//                         Occupation
//                       </div>
                      
//                     </span>
//                     <input type='text' value={form.occupation} name='occupation' onChange={handleInputs} placeholder='Enter Occupation'/>
                   

//                   </span>
//                   <span className="justify-between items-stretch self-center flex w-[400px] max-w-full gap-5 mt-6">
//                     <span className="items-center flex justify-between gap-2.5">
//                       <img
//                         loading="lazy"
//                         alt=""
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ff2968b07acb997e6b373491444d52286bcf0a47409ff7de0725eff8b708f20?"
//                         className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
//                       />
//                       <div className="text-gray-600 text-2xl leading-8 self-stretch grow whitespace-nowrap">
//                         No Of Paper Published
//                       </div>
//                     </span>
//                     <input className='ml-3 w-20 text-center' type='number' value={form.paperPublished} name='paperPublished' onChange={handleInputs} placeholder='Enter No.ofPapers Published'/>
                    

//                   </span>
//                   <span className="justify-between items-stretch self-center flex w-[400px] max-w-full gap-5 mt-6">
//                     <span className="items-center flex justify-between gap-2.5">
//                       <img
//                         loading="lazy"
//                         alt=""
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd2e0bad621e3710d06149abdb42dc2d423789b2510fc158dffe66f08cf9463e?"
//                         className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
//                       />
//                       <div className="text-gray-600 text-2xl leading-8 self-stretch grow whitespace-nowrap">
//                         Location
//                       </div>
//                     </span>
//                     <input  className='mb-2' type='text' value={form.location} name='location' onChange={handleInputs} placeholder='Enter Location'/>
                  
                 
//                   </span>
//                  <input type='text' value={form.expertise} name='expertise' onChange={handleInputs} placeholder='Enter Expertise'/>
                   
                
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col items-stretch w-[68%] ml-5 max-md:w-full max-md:ml-0">
//           <span className="items-start bg-white flex grow flex-col w-full px-20 py-12 max-md:max-w-full max-md:px-5">
//             <div className='flex gap-2'>
//             <button onClick={change} className="bg-gray-900   hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
//             {edit?"Update Profile":"Edit"} 
//             </button>
//             <button className="bg-gray-900   hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
//            Submit Form 
//             </button>
//             </div>

//             <div className="text-gray-700 text-4xl font-extrabold leading-10 self-stretch mt-6 max-md:max-w-full">
//               Martha Nielsen
//             </div>
//             <div className="text-neutral-900 text-center text-2xl font-bold leading-8 self-stretch mr-4 mt-8 max-md:max-w-full max-md:mr-2.5">
//               About
//             </div>
//            <input className='bg-gray-900 text-slate-100' type='text' value={form.about} name='about' onChange={handleInputs} placeholder='Enter about'/>
         
//             <div className="text-neutral-900 text-center text-2xl font-bold leading-8 mt-20 self-start max-md:max-w-full max-md:mt-10">
//               Projects
//             </div>
//            <input className='bg-gray-900 text-slate-50' type='text' value={form.project} name='project' onChange={handleInputs} placeholder='Enter Projects'/>
       
//             <div className="self-stretch mr-4 mt-20 mb-6 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
//               <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//                 <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
//                   <span className="items-stretch flex flex-col max-md:mt-10">
//                     <div className="text-neutral-900 text-center text-2xl font-bold leading-8">
//                       Connect with Me
//                     </div>
//                    <input type='email' value={form.gmail} name='gmail' onChange={handleInputs} placeholder='Enter Gmail'/>


//  <input  className="bg-slate-50 text-black-100"type='text' value={form.linkedin} name='linkedin' onChange={handleInputs} placeholder='Enter Linkedin'/>
                     

//                   </span>
//                 </div>
//                 <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
//                   <span className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
//                     <div className="text-neutral-900 text-2xl font-bold leading-8 max-md:max-w-full">
//                       Form
//                     </div>
//                     <div className="mt-6 px-0.5 py-1 max-md:max-w-full">
//                       <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//                         <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
//                           <span className="flex flex-col items-stretch max-md:mt-10">
//                             <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap">
//                               Introvert
//                             </div>
//                             <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-10">
//                               Sensing
//                             </div>
//                             <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-9">
//                               Thinking
//                             </div>
//                             <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-9">
//                               Judging
//                             </div>
//                           </span>
//                         </div>
//                         <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
//                           <div className="flex grow flex-col items-end max-md:mt-10">
//                             <span className="flex w-[116px] max-w-full flex-col items-stretch">
//                               <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap self-end">
//                                 Extrovert
//                               </div>
//                               <div className="flex shrink-0 h-3.5 flex-col mt-2.5 rounded-[50%]" />
//                               <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-4 self-end">
//                                 Intuition
//                               </div>
//                               <div className="flex shrink-0 h-3.5 flex-col mt-2.5 rounded-[50%]" />
//                               <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-4 self-end">
//                                 Feeling
//                               </div>
//                               <div className="flex shrink-0 h-3.5 flex-col mt-1.5 rounded-[50%]" />
//                               <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-4 self-end">
//                                 Perceiving
//                               </div>
//                             </span>
//                             <div className="flex w-3.5 shrink-0 h-3.5 flex-col mt-2 rounded-[50%] self-start" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </span>
//         </div>
//       </div>
//       </form>:






//       <>   
     
//      {/* {setLoading===true?<Loading/>: */}
//      <>
//      (
//      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//         <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
//           <div className="self-stretch flex grow flex-col justify-center items-stretch w-full max-md:max-w-full">
//             <div className="bg-neutral-900 flex flex-col justify-center items-stretch max-md:max-w-full">
//               <div className="bg-white flex flex-col justify-center items-stretch max-md:max-w-full">
//                 <span className="bg-slate-200 flex flex-col px-10 py-12 max-md:max-w-full max-md:px-5">
//                 <img
//                   loading="lazy"
//                   alt=""
//                   src='/bad.webp'
//                   className="aspect-[1.02] object-cover object-center w-[370px] h-[370px] rounded-full shadow overflow-hidden self-center max-w-full mt-2.5"
// />

  
//              { data?.bio ?
//            (  <div className="justify-center text-neutral-400 text-center text-lg font-bold leading-7 self-stretch mt-16 max-md:max-w-full max-md:mt-10">
//             {data.bio}
//               </div>):
//             ( <div className="justify-center text-neutral-400 text-center text-lg font-bold leading-7 self-stretch mt-16 max-md:max-w-full max-md:mt-10">
//              Enter bio
//                   </div>)}
//                   <span className="justify-between items-stretch self-center flex w-[400px] max-w-full gap-5 mt-16 max-md:mt-10">
//                     <span className="items-center flex justify-between gap-2.5">
//                       <img
//                         loading="lazy"
//                         alt=""
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/6060cbf5e71feae77026f5df300558869e3f6c3f3e4ffbad4ff1f96f16849691?"
//                         className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
//                       />
//                       <div className="text-gray-600 text-2xl leading-8 self-stretch">
//                         Age
//                       </div>
//                     </span>
//                  { data?.age?
//                 ( <div className="text-neutral-900 text-center text-2xl font-bold leading-8">
//                  {data?.age}
//                </div>):
//                 ( <div className="text-neutral-900 text-center text-2xl font-bold leading-8">
//                       Enter age
//                     </div>)}
//                   </span>
//                   <span className="justify-between items-stretch self-center flex w-[400px] max-w-full gap-5 mt-6">
//                     <span className="items-center flex justify-between gap-2.5">
//                       <img
//                         loading="lazy"
//                         alt=""
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/60d9abeb74446fc6d086d97442932761a4c5464cb7f20f4117ed2bb3cb43580e?"
//                         className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
//                       />
//                       <div className="text-gray-600 text-2xl leading-8 self-stretch grow whitespace-nowrap">
//                         Occupation
//                       </div>
                      
//                     </span>
//                {data?.occupation?<div className="text-neutral-900 text-center text-2xl font-bold leading-8">
//                       {" "}
//                       {data.occupation}
//                     </div>:
//                     <div className="text-neutral-900 text-center text-2xl font-bold leading-8">
//                     {" "}
//                     Enter Occupation
//                   </div>
//                     }

//                   </span>
//                   <span className="justify-between items-stretch self-center flex w-[400px] max-w-full gap-5 mt-6">
//                     <span className="items-center flex justify-between gap-2.5">
//                       <img
//                         loading="lazy"
//                         alt=""
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ff2968b07acb997e6b373491444d52286bcf0a47409ff7de0725eff8b708f20?"
//                         className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
//                       />
//                       <div className="text-gray-600 text-2xl leading-8 self-stretch grow whitespace-nowrap">
//                         No Of Paper Published
//                       </div>
//                     </span>
//       {data?.paperPublished?
//         <div className="text-neutral-900 text-center text-2xl font-bold leading-8">
//                      {data?.paperPublished}
//                     </div>:
//       <div className="text-neutral-900 text-center text-2xl font-bold leading-8">
//                       Enter no.of Paper published
//                     </div>
// }
//                   </span>
//                   <span className="justify-between items-stretch self-center flex w-[400px] max-w-full gap-5 mt-6">
//                     <span className="items-center flex justify-between gap-2.5">
//                       <img
//                         loading="lazy"
//                         alt=""
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd2e0bad621e3710d06149abdb42dc2d423789b2510fc158dffe66f08cf9463e?"
//                         className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full my-auto"
//                       />
//                       <div className="text-gray-600 text-2xl leading-8 self-stretch grow whitespace-nowrap">
//                         Location
//                       </div>
//                     </span>
//                {data?.location?
//                <div className="text-neutral-900 text-center text-2xl font-bold leading-8 flex-1">
//                {data?.location}
//               </div>:
//                <div className="text-neutral-900 text-center text-2xl font-bold leading-8 flex-1">
//                      Enter location
//                     </div>}
//                   </span>

// {data?.expertise?
//   <div className="items-stretch self-center flex w-[400px] max-w-full gap-5 mt-12 max-md:mt-10">
//                     <span className="text-neutral-900 text-center text-lg font-semibold leading-6 items-stretch rounded bg-zinc-200 grow justify-center px-5 py-3">
//                     {data?.expertise}
//                     </span>
                    
//                   </div>:

// <div className="items-stretch self-center flex w-[400px] max-w-full gap-5 mt-12 max-md:mt-10">
//                     <span className="text-neutral-900 text-center text-lg font-semibold leading-6 items-stretch rounded bg-zinc-200 grow justify-center px-5 py-3">
//                       PASSIONATE
//                     </span>
//                     <span className="text-neutral-900 text-center text-lg font-semibold leading-6 items-stretch rounded bg-zinc-200 grow justify-center px-5 py-3">
//                       HONEST
//                     </span>
//                   </div>}
                
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col items-stretch w-[68%] ml-5 max-md:w-full max-md:ml-0">
//           <span className="items-start bg-white flex grow flex-col w-full px-20 py-12 max-md:max-w-full max-md:px-5">
//           <button onClick={change} className="bg-gray-900   hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
//             {edit?"Update Profile":"Edit"} 
//             </button>

//             <div className="text-gray-700 text-4xl font-extrabold leading-10 self-stretch mt-6 max-md:max-w-full">
//               Martha Nielsen
//             </div>
//             <div className="text-neutral-900 text-center text-2xl font-bold leading-8 self-stretch mr-4 mt-8 max-md:max-w-full max-md:mr-2.5">
//               About
//             </div>

// {data?.about?
//   <div className="text-stone-500 text-2xl leading-8 self-stretch w-full mr-4 mt-6 max-md:max-w-full max-md:mr-2.5">
//          {data.about}
//             </div>:
// <div className="text-stone-500 text-2xl leading-8 self-stretch w-full mr-4 mt-6 max-md:max-w-full max-md:mr-2.5">
//               Martha is a compassionate and thoughtful young woman with a deep
//               love for acting and a keen interest in political activism. She
//               once embarked on a hunger strike to raise awareness about child
//               hunger in Africa, demonstrating her strong commitment to making a
//               difference. Martha is also known for her skepticism towards
//               established institutions and holds reservations about nuclear
//               energy. She always carries her smartphone, as it enables her to
//               stay connected with friends and stay informed about important
//               political and environmental developments. Martha leads a healthy
//               lifestyle and does not have any detrimental habits.
//             </div>}
//             <div className="text-neutral-900 text-center text-2xl font-bold leading-8 mt-20 self-start max-md:max-w-full max-md:mt-10">
//               Projects
//             </div>
//        { data?.project?
//        <div className="text-stone-500 text-2xl leading-8 w-[445px] max-w-full mt-6 self-start">
//       {data?.project}
//        <br />
//        Sharing her thoughts and perspectives on literature with friends,
//        fostering meaningful conversations.
//      </div>:
//        <div className="text-stone-500 text-2xl leading-8 w-[445px] max-w-full mt-6 self-start">
//               Discovering captivating books, articles, and authors to expand her
//               reading horizons.
//               <br />
//               Organizing and cataloging her book collection for easy access and
//               reference.
//               <br />
//               Seeking out unique and compelling stories that resonate with her
//               interests and values.
//               <br />
//               Sharing her thoughts and perspectives on literature with friends,
//               fostering meaningful conversations.
//             </div>
// }
//             <div className="self-stretch mr-4 mt-20 mb-6 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
//               <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//                 <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
//                   <span className="items-stretch flex flex-col max-md:mt-10">
//                     <div className="text-neutral-900 text-center text-2xl font-bold leading-8">
//                       Connect with Me
//                     </div>
//                     <img
//                       loading="lazy"
//                       alt=""
//                       src="data:image/png;base64,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"
//                       className="aspect-[4.41] object-contain object-center w-full overflow-hidden mt-6"
//                     />


// <img
//                       loading="lazy"
//                       alt=""
//                       src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUKZsL///8AZME7eMgAWb7i6fUAXL/Az+oAYsFjj9B1m9QAYMBGgswAVr0AXb8AWr5ZjdBWh80ZbMTO3PCzx+drl9T2+f2Ssd7G1u0dbsXF1e3w9fs2dsfl7ffV4fIocsaApNmowOSMrNyrw+Wbt+AAUryFqNr2AL+0AAADz0lEQVR4nO3ca1+qMACAcZiA5ATMW+a98vT9P+LROkXiNruMLXae/2v1xyOy6QCjCAAAAAAAAAAAAAAAAAAAALBGnPjeiPbkZSJ36/W4qmSQlbIYTTfxyXx72CXBNYpkv4o/mAwDayx7m7hhWoWUWM2afUebcTiJ5UAReDweo1AS5VAZeNyLgXxQhZxrCo/Hou+NsyJ70AXGcS+EnSgifWC8SHxvngXyzlAYhzCeJqmp8FH63r4fE8IUGC+6P9YI3VTxatP9AzFXz/bvCt8b+GNyT2HX5aov3UEVip4xMO3+SBNlxsJp6Xv7fq5amApn3Z/xzQfivAzgW1tUrPSFDwF8SM1zfiDLisUk5KPwREjN5/QpgKnilbhXrmP0uz/bvxPR9jLwEFDgacm7+Ut/c5v53ijLSvHw4WhMB0Xue4usE2U1vOtv03Qy3e+S8PpeCJlVSZKVgcyCAIDfT+SyrI6Ok0+As4+QVbGbHabLxWTRf7qb7YrMa6XIdZpbpX3k2QPzSuyXjV8rk8dd4i1SjG90bs+3SQx1D7yvH5gnt0vlr830ufK06mNYMW2cl8nUm370/laIYmQ4W3covSwaGAob68FZ/1phudOuiLyYDwoPu9FeoSiejX0nE+H+Z4u1QiHNO/DVfOh8hdJWYT42LLx+NHN9XtlSoVxrL8tpGjheILFTqFmvU7txO6RaKZT5Jz+ir9xeiWSl8M9nBpnayunVqzYKh9eniXNTl8vpVvbhFwOP74nDadFG4RdGmbeXdriibqPwG2budqKnQofXQHgqjIfOhlNfhX1nX958FcaZq53ordDZOXRvhVNXX8DtF87TNP3EDLlyNZpaLlwOxkWSJIWYXX20q4vIrRY+jat/S4tCVmPjBWXuDkSLhave2V02ojDeBxAfHK1n2CvcZs1vYhcXQJxZOhpqrBWqvofpr7fSPOE3F84vTgKcXvze9AxHvy9sFY6U40Zleo6jMxmWChfqHWK8n8PRdGGpULe4lBiWqHZdKtzqRg3TkxwtudkpfNbN3tKwSNWpQu0hJQyrVF0q3GgHftPNcV0qXOp/sBdhFBou6jcMpl0qNNxrmlz8XUMnC/fBFw7067uGG40ptITCGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwhqFahS2j8IahWoUto/CGoVqFLaPwlqAhc1/4NHfx2Qq9H7lXhT1dNaNf1HqDc/djt4YrroXa+3rtx1Wb4PWlQfq/zPrWy8PAAAAAAAAAAAAAAAAAAAA4D/0F5lQSZ+5G/qbAAAAAElFTkSuQmCC'
//                       className="aspect-[4.41] object-contain object-center w-full overflow-hidden mt-6"
//                     />

//                   </span>
//                 </div>
//                 <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
//                   <span className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
//                     <div className="text-neutral-900 text-2xl font-bold leading-8 max-md:max-w-full">
//                       Form
//                     </div>
//                     <div className="mt-6 px-0.5 py-1 max-md:max-w-full">
//                       <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
//                         <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
//                           <span className="flex flex-col items-stretch max-md:mt-10">
//                             <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap">
//                               Introvert
//                             </div>
//                             <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-10">
//                               Sensing
//                             </div>
//                             <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-9">
//                               Thinking
//                             </div>
//                             <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-9">
//                               Judging
//                             </div>
//                           </span>
//                         </div>
//                         <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
//                           <div className="flex grow flex-col items-end max-md:mt-10">
//                             <span className="flex w-[116px] max-w-full flex-col items-stretch">
//                               <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap self-end">
//                                 Extrovert
//                               </div>
//                               <div className="flex shrink-0 h-3.5 flex-col mt-2.5 rounded-[50%]" />
//                               <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-4 self-end">
//                                 Intuition
//                               </div>
//                               <div className="flex shrink-0 h-3.5 flex-col mt-2.5 rounded-[50%]" />
//                               <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-4 self-end">
//                                 Feeling
//                               </div>
//                               <div className="flex shrink-0 h-3.5 flex-col mt-1.5 rounded-[50%]" />
//                               <div className="text-neutral-900 text-lg leading-6 whitespace-nowrap mt-4 self-end">
//                                 Perceiving
//                               </div>
//                             </span>
//                             <div className="flex w-3.5 shrink-0 h-3.5 flex-col mt-2 rounded-[50%] self-start" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </span>
//         </div>
//       </div>)
//      </>
//      }
    

//       </> 
//       }
//     </div>
//     <ToastContainer
// position="top-center"
// autoClose={5000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable
// pauseOnHover
// theme="colored"
// />
//     </div>
//   )
// }
