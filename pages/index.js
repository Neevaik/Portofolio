import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="max-w-screen-lg flex">
        <div className="flex flex-col justify-center">
          <h2 className="text-xl mb-4">Software Developer</h2>
          <h1 className="text-5xl font-bold mb-6">Hello I am</h1>
          <h1 className="text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r text-transparent from-pink-500 to-purple-500 bg-clip-text">Kevin Mavier</span>
          </h1>
          <p className="text-xl mb-8">Welcome to my portfolio. Here you'll find my projects and more about my skills.</p>
        </div>
        <img src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile picture" className="flex-grow h-auto w-64" />
      </div>
    </div>
  );
}
