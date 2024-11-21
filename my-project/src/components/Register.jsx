import Register_bg from '../assets/images/Register_bg.png'
import { useState } from 'react';
import Button from '../shared/Button';
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Register=()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [profileImage, setProfileImage] = useState(null);
    const [errors, setErrors] = useState({});
    const validateForm = () => {
    const newErrors = {}; // Un objet pour stocker les erreurs
if (!name.trim()) newErrors.name = "Name is required.";
if (!email.trim()) newErrors.email = "Email is required.";
else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email.";
if (!password) newErrors.password = "Password is required.";
else if (password.length < 8) newErrors.password = "Password must be at least 8 characters long.";
if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match.";

    // if (!profileImage) newErrors.profileImage = "Une photo de profil est requise.";

    setErrors(newErrors); // Met à jour l'état des erreurs
    return Object.keys(newErrors).length === 0; // Si aucune erreur, retourne true
};
  const handleSubmit = async (e) => {
     e.preventDefault();

  // Validation du formulaire
  if (!validateForm()) {
    toast.error('Please correct the errors in the form');
    return;
  }

  // Objet des données à envoyer
  const registerUser = {
    name: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    profileImage: profileImage, // Assurez-vous que cette variable contient l'image sélectionnée
  };

  try {
    // Envoi des données via Axios
    // await axios.post('/register', registerUser);  // Utilisez `registerUser` au lieu de `data`
    toast.success('Registration successful');
    console.log('send');
  } catch (error) {
    toast.error('An error occurred during registration');
  }
};

    return(
        <>
     
        <div className="font-[sans-serif] bg-white md:h-screen ">
          
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4  h-full">
          <img src={Register_bg} className="lg:max-w-[80%] w-full h-full object-contain block mx-auto" alt="login-image" />
        </div>

        <div className="flex items-center p-6 h-full ">
          <form className="max-w-lg w-full mx-auto">
            <div className="mb-12">
              <h3 className="text-blue-600 md:text-3xl text-2xl font-extrabold max-md:text-center">Create an account</h3>
            </div>

            <div>
              <label className="text-gray-800 text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input onChange={(e)=>setName(e.target.value)} name="name" type="text" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter name" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                </svg>
              </div>
<<<<<<< HEAD
              {errors.name && <span className="text-red-500">{errors.name}</span>} 
            </div>
            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input   onChange={(e)=>setEmail(e.target.value)} name="email" type="text" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter email" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
=======
            </div>
            <div class="mt-6">
              <label class="text-gray-800 text-xs block mb-2">Email</label>
              <div class="relative flex items-center">
                <input name="email" type="text" required class="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter email" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
>>>>>>> c5dc4e44c0ead038cca86860cbac5d3f1780bdfb
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
<<<<<<< HEAD
                  <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
=======
                  <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
>>>>>>> c5dc4e44c0ead038cca86860cbac5d3f1780bdfb
                    <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                  </g>
                </svg>
              </div>
<<<<<<< HEAD
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>
            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input   onChange={(e)=>setPassword(e.target.value)}  name="password" type="password" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter password" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
              {errors.password && <span className='text-red-500'>{errors.password}</span>}
            </div>
              <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Password Confirmation</label>
              <div className="relative flex items-center">
                <input onChange={(e)=>setConfirmPassword(e.target.value)} name="password_confirmation" type="password" required className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter password" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
              {errors.confirmPassword&& <span>{errors.confirmPassword}</span>}
            </div>
              <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Upload your photo</label>
             {errors.profileImage&& <span className='text-red-500'>{errors.profileImage}</span>}
<div class="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl ">
  <div class="md:flex">
    <div class="w-full p-3">
      <div
        class="relative h-48 rounded-lg border-2 border-blue-500 bg-gray-50 flex justify-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
      >
        <div class="absolute flex flex-col items-center">
          <img
            alt="File Icon"
            class="mb-3"
            src="https://img.icons8.com/dusk/64/000000/file.png"
          />
          <span class="block text-gray-500 font-semibold"
            >Drag &amp; drop your files here</span
          >
          <span class="block text-gray-400 font-normal mt-1"
            >or click to upload</span
          >
        </div>

        <input
          name=""
     
          class="h-full w-full opacity-0 cursor-pointer"
          type="file"
        />
      </div>
    </div>
  </div>
</div>

            </div>
            <div className="flex items-center mt-6">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
              <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                I accept the <a href="" className="text-blue-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>

            <div className="mt-12">
              <button onClick={(e)=>handleSubmit(e)} type="button" className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none">
                Creat an account
              </button>
              <p className="text-sm mt-6 text-gray-800">Already have an account? <a  className="text-blue-500 font-semibold hover:underline ml-1">Login here</a></p>
=======
            </div>
            <div class="mt-6">
              <label class="text-gray-800 text-xs block mb-2">Password</label>
              <div class="relative flex items-center">
                <input name="password" type="password" required class="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none" placeholder="Enter password" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>
            <div class="flex items-center mt-6">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 rounded" />
              <label for="remember-me" class="ml-3 block text-sm text-gray-800">
                I accept the <a href="javascript:void(0);" class="text-blue-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>

            <div class="mt-12">
              <button type="button" class="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none">
                Creat an account
              </button>
              <p class="text-sm mt-6 text-gray-800">Already have an account? <a href="javascript:void(0);" class="text-blue-500 font-semibold hover:underline ml-1">Login here</a></p>
>>>>>>> c5dc4e44c0ead038cca86860cbac5d3f1780bdfb
            </div>
          </form>
        </div>
      </div>
<<<<<<< HEAD
       <ToastContainer />
    </div>

=======
    </div>
>>>>>>> c5dc4e44c0ead038cca86860cbac5d3f1780bdfb
        </>
    );
}
export default Register