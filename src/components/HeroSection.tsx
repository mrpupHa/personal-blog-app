import tourist from "../assets/images/tourist.jpg";

function HeroSection() {
  return (
    <div className="flex flex-row gap-[60px]">
      <div className="flex-1">
        <h1>Stay Informed, Stay Inspired</h1>
        <p>
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
          Inspiration and Information.
        </p>
      </div>
      <div className="flex-1">
        <img src={tourist} alt="tourist" />
      </div>
      <div className="flex-1">
        <p>-Author</p>
        <p>Thompson P.</p>
        <p>
          I am a pet enthusiast and freelance writer who specializes in animal
          behavior and care. With a deep love for cats, I enjoy sharing insights
          on feline companionship and wellness. When i’m not writing, I spends
          time volunteering at my local animal shelter, helping cats find loving
          homes.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
