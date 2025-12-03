// src/components/Profile.jsx
const Profile = () => (
  <section id="about" className="mb-16 pt-8">
    <h2 className="text-3xl font-bold mb-6 border-b-2 border-accent inline-block pb-1">About Me</h2>
    <div className="flex flex-col md:flex-row gap-10">
      
      <div className="md:w-3/5">
        <p className="mb-4">
          I am a doctoral student in Astrophysics at ETH Zurich, Switzerland. My research is on constraining the link between the atmospheric composition of giant planets and their formation history by obtaining direct spectroscopic data with the Very Large Telescope. Beside my research, I am teaching Physics and Astrophysics classes to Physics and Engineering students. My PhD mentor is Prof. Dr. Sascha P. Quanz.
        </p>
        <p className="mb-4">
          Before my doctorate, I completed both my Bachelor (2015-2018) and Master (2018-2021) in Physics at ETH Zurich. I was already a teaching assistant whilst studying for my Bachelor and Master, giving Linear Algebra and Analysis courses to Physics and Mathematics Bachelor students. I was so passionate that I obtained an award from the Department of Mathematics for excellent teaching.
        </p>
        <p className="mb-8">
          I am fluent in French, English, German, and Swiss German.
        </p>
        
        <h3 className="text-xl font-semibold mb-2" id="contact">Contact</h3>
        <p className="text-gray-600">
          Email: <a href="mailto:jeanhayoz94@gmail.com" className="text-accent hover:underline">jeanhayoz94 [at] gmail [dot] com</a>
          <br />
          GitHub: <a href="https://github.com/JHayoz" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">JHayoz</a>
          <br />
          LinkedIn: <a href="https://linkedin.com/in/jean-hayoz" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">jean-hayoz</a>
        </p>
      </div>
      
      <figure className="md:w-2/5 flex flex-col items-center">
        {/* Remember to place your image file in the 'public' folder or import it */}
        
        <img 
          src="/Jean_Paranal_2022_ERISCOM.JPG" // Path assumes image is in the 'public' folder
          alt="Jean at Paranal"
          className="rounded-lg shadow-xl w-full h-auto object-cover"
        />
        <figcaption className="mt-3 text-sm text-gray-500">
          Cerro Paranal (Chile), July 2022.
        </figcaption>
      </figure>

    </div>
  </section>
);

export default Profile;