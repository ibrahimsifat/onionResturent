import React from 'react';




const AboutBody = () => {
    return (
        <div>
          <div class=" flex items-center justify-around ">
<Expart></Expart>
<Expart></Expart>
</div>
        </div>
    );
};
const Expart=()=>{
    return(
        <div>
            <div class="user-card relative w-96 mb-32 h-auto bg-white rounded-md pt-24 pb-8 px-4 hover:shadow- transition flex flex-col items-center">
        <div class="absolute rounded-full bg-gray-100 w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
            <div class="rounded-full bg-black w-full h-full overflow-auto">
                <img src="https://rairaksa.github.io/assets/img/rai.jpg" alt="" />
            </div>
        </div>
        <label class="font-bold text-gray-800 text-lg">
           Ibrahim Sifat
        </label>
        <p class="text-center text-gray-800 mt-2 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        </p>
        <ul class="flex flex-row gap-2 mt-4">
     <li>{'FaceBook'}</li>
     <li>{'faGithub'}</li>
     <li>{'element'}</li>
        </ul>
    </div>
        </div>
    )
}

export default AboutBody;